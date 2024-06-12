import { Popconfirm } from "antd";
import axios from "axios";
import { toast } from "sonner";
import config from "../../config";
import { Link, useLocation } from "react-router-dom";

const AppointmentEcoSpaceListItem = ({ appointment, refetch }) => {
  const { date, status, _id } = appointment;
  const { pathname } = useLocation();

  console.log({ pathname });

  const confirmDelete = async () => {
    try {
      const res = await axios.delete(
        `${config.api_url}/appointments/delete/${_id}`
      );

      if (res?.status === 200) {
        refetch();
        toast.success("Appointment Cancelled!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      return toast.error(
        error.response.data.message || `Something went wrong!`,
        {
          id: "login",
          duration: 2000,
          position: "top-center",
        }
      );
    }
  };

  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-start md:items-center p-2 gap-2 rounded-lg">
      <div className="">
        <h2 className="text-2xl md:text-lg">Requested on: {date}</h2>
        <div className="flex gap-1 items-center">
          <p>Status: {status}</p>
        </div>
      </div>

      <div className="flex items-center w-full md:w-auto gap-2">
        {pathname.includes("requested") ? (
          <Popconfirm
            title="Cancel the appointment!"
            description="Are you sure to delete this appointment?"
            onConfirm={confirmDelete}
            // onCancel={cancelDelete}
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              style: {
                background: "#1677ff",
              },
            }}
          >
            <button className="p-btn w-auto">Cancel Appointment</button>
          </Popconfirm>
        ) : (
          <Link className="p-btn w-auto" to={`/appointments/${_id}`}>
            View
          </Link>
        )}
      </div>
    </div>
  );
};

export default AppointmentEcoSpaceListItem;
