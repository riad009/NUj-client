import { Popover } from "antd";
import port from "../../assets/home/port.jpg";
import { Link } from "react-router-dom";

const PortfolioBannerCard = () => {
  const title = "Jordan P.";
  const content = <h2>Re-entry & Jury</h2>;
  return (
    <>
      <Popover className="hidden md:block" content={content} title={title}>
        <Link>
          <img src={port} alt="" />
        </Link>
      </Popover>
      <Link className="block md:hidden bg-base-200">
        <img src={port} alt="" />
        <div className="p-5">
          <h2 className="text-xl font-medium">{title}</h2>
          {content}
        </div>
      </Link>
    </>
  );
};

export default PortfolioBannerCard;
