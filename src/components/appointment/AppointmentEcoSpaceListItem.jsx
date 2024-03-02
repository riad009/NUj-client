import { Link } from "react-router-dom";

const AppointmentEcoSpaceListItem = ({ ecoSpace }) => {
  const { company, staffs, project, _id } = ecoSpace;

  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-start md:items-center p-2 gap-2 rounded-lg">
      <div className="">
        <h2 className="text-2xl md:text-lg">{company}</h2>
        <div className="flex gap-1 items-center">
          {/* <img
            className="size-10 rounded-box "
            src={user?.photoURL ? user?.photoURL : unknown}
            alt=""
          /> */}
          <p>{staffs.length} members</p>
        </div>
      </div>
      <h2>{project}</h2>
      <div className="flex items-center w-full md:w-auto gap-2">
        <Link to={`/make-appointment/${_id}`} className="p-btn w-auto">
          Make Appointment
        </Link>
        <Link to={`/profile/eco-space/${_id}`} className="p-btn w-auto">
          Visit
        </Link>
      </div>
    </div>
  );
};

export default AppointmentEcoSpaceListItem;
