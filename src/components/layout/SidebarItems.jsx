import { useContext } from "react";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { PiOfficeChair } from "react-icons/pi";
import { MdAddBusiness } from "react-icons/md";
import { LiaHandshakeSolid } from "react-icons/lia";

const SidebarItems = () => {
  const { logOut, onClose } = useContext(AuthContext);
  return (
    <div className="flex flex-col text-base tracking-wider space-y-4">
      <Link
        onClick={onClose}
        to="/profile/user"
        className="flex items-center gap-2"
      >
        <GoPerson className="text-xl text-primary" />
        <span>Profile</span>
      </Link>
      <Link
        onClick={onClose}
        to="/profile/eco-space/list"
        className="flex items-center gap-2"
      >
        <PiOfficeChair className="text-xl text-primary" />
        <span>My EcoSpaces</span>
      </Link>
      <Link
        onClick={onClose}
        to="/create-eco-space/banner"
        className="flex items-center gap-2"
      >
        <MdAddBusiness className="text-xl text-primary" />
        <span>Add new EcoSpace</span>
      </Link>
      <Link
        onClick={onClose}
        to="/make-appointment"
        className="flex items-center gap-2"
      >
        <LiaHandshakeSolid className="text-xl text-primary" />
        <span>Make an Appointment</span>
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
