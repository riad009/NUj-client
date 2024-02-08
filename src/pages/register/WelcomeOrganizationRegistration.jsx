import { Link } from "react-router-dom";

const WelcomeOrganizationRegistration = () => {
  return (
    <div>
      welcome org reg
      <Link to="/register/organization" className="p-btn">
        Org reg
      </Link>
    </div>
  );
};

export default WelcomeOrganizationRegistration;
