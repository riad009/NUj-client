import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardUserProfileEcoSpaceListItem = () => {
  return (
    <tr>
      <td>
        <div className="font-bold">XYZ Org</div>
      </td>
      <td>Mental Support</td>
      <td>Camp fire</td>
      <td className="flex items-center justify-start gap-2">
        <Link to="/profile/eco-space">
          <IoEye className="text-xl text-primary" />
        </Link>
      </td>
    </tr>
  );
};

export default DashboardUserProfileEcoSpaceListItem;
