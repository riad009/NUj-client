import { Modal } from "antd";
import axios from "axios";
import { useEffect } from "react";
import config from "../../config";

const NotificationModal = ({ open, setOpen, notifications, refetch }) => {
  const id = notifications?.[notifications?.length - 1]?._id;

  console.log({ id });

  useEffect(() => {
    const udpateNoti = async () => {
      await axios.get(`${config.api_url}/notification/get/${id}`);
      refetch();
    };
    udpateNoti();
  }, [refetch, open]);

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
                <div key={index} className="bg-gray-100 p-2 rounded-sm">
                  {noti?.message}
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
