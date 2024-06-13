import { Modal } from "antd";
import axios from "axios";
import { useEffect } from "react";
import config from "../../config";
import moment from "moment";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

const NotificationModal = ({ open, setOpen, notifications, refetch }) => {
  const id = notifications?.[0]?._id;

  console.log({ id });

  useEffect(() => {
    const udpateNoti = async () => {
      await axios.get(`${config.api_url}/notification/get/${id}`);
      refetch();
    };
    udpateNoti();
  }, [refetch, open]);

  const deleteNoti = async (notiId) => {
    try {
      const res = await axios.delete(
        `${config.api_url}/notification/delete/${notiId}`
      );
      if (res.status === 200) {
        refetch();
        toast.success("Notification deleted!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        title="Notifications"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
        footer={null}
      >
        <div className="overflow-y-auto h-64 flex flex-col gap-2">
          {notifications?.length > 0 ? (
            <>
              {notifications?.map((noti, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-2 rounded-sm flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-xs text-gray-400">
                      {moment(noti?.createdAt).fromNow()}
                    </p>
                    <p>{noti?.message}</p>
                  </div>

                  <FaTrash
                    className="cursor-pointer"
                    onClick={() => deleteNoti(noti?._id)}
                  />
                </div>
              ))}
            </>
          ) : (
            <div className="text-center py-10">
              <p>No notifications to show</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
export default NotificationModal;
