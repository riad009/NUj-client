import { useContext } from "react";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const SidebarItems = () => {
  const { logOut, onClose } = useContext(AuthContext);
  return (
    <div className="flex flex-col text-base tracking-wider space-y-2">
      <Link onClick={onClose} to="/profile/user">
        Profile
      </Link>
      <Link onClick={onClose} to="/profile/eco-space/list">
        My EcoSpaces
      </Link>
      <Link onClick={onClose} to="/create-eco-space/banner">
        Add new EcoSpace
      </Link>
      <Link onClick={onClose} to="/make-appointment">
        Make an Appointment
      </Link>
      <button
        className={`px-4 py-2 border uppercase  font-semibold rounded-md
          bg-error text-base-100
        }`}
        onClick={() => logOut().then(toast.success("Logged out"))}
      >
        Sign out
      </button>
    </div>
  );
};

export default SidebarItems;
