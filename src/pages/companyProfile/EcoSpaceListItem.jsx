import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { Link } from "react-router-dom";

const EcoSpaceListItem = ({ ecoSpace }) => {
  const { company, coWorkers, _id } = ecoSpace ?? {};
  const { userDB } = useContext(AuthContext);
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-2 rounded-lg">
      <div className="">
        <h2 className="text-2xl md:text-lg">{company}</h2>
        <div className="flex gap-1 items-center">
          <img className="size-10 rounded-box " src={userDB?.photo} alt="" />
          <p>{coWorkers.length} members</p>
        </div>
      </div>
      {/* <h2>Working on - {projects ? projects[0] : projects}</h2> */}
      <Link to={`/eco-space/${_id}`} className="p-btn w-full md:w-auto">
        Visit EcoSpace
      </Link>
      {/* <Link to={`/profile/eco-space/${_id}`} className="p-btn w-full md:w-auto">
        Visit EcoSpace
      </Link> */}
    </div>
  );
};

export default EcoSpaceListItem;
