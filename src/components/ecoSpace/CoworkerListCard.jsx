import { MdMessage } from "react-icons/md";
import unknown from "../../assets/home/unknown.jpg";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CoworkerListCard = ({ coworker }) => {
  const { ecoSpaceId } = useParams();
  const { userDB } = useContext(AuthContext);

  return (
    <>
      {userDB?.email === coworker ? (
        <div
          className={`flex items-center justify-between gap-2 rounded-lg p-2`}
        >
          <div className="flex gap-2 items-center">
            <img className="size-6 rounded-lg" src={unknown} alt="" />
            <p className="text-sm">{coworker}</p>
          </div>
        </div>
      ) : (
        <NavLink
          to={`/eco-space/${ecoSpaceId}/${coworker}`}
          className={({ isActive }) =>
            `flex items-center justify-between gap-2 rounded-lg p-2 ${
              isActive ? "bg-[#83388b] text-white" : ""
            }`
          }
        >
          <div className="flex gap-2 items-center">
            <img className="size-6 rounded-lg" src={unknown} alt="" />
            <p className="text-sm">{coworker}</p>
          </div>
          <MdMessage />
        </NavLink>
      )}
    </>
  );
};

export default CoworkerListCard;
