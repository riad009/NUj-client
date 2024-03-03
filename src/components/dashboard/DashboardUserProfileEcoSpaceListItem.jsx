import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardUserProfileEcoSpaceListItem = ({ ecoSpace }) => {
  const { company, project, _id } = ecoSpace ?? {};
  return (
    <tr>
      <td>
        <div className="font-bold">{company}</div>
      </td>
      {/* <td>Mental Support</td> */}
      <td>{project}</td>
      <td className="flex items-center justify-start gap-2">
        <Link to={`/profile/eco-space/${_id}`}>
          <IoEye className="text-xl text-primary" />
        </Link>
      </td>
    </tr>
  );
};

export default DashboardUserProfileEcoSpaceListItem;
