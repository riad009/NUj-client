import { Divider } from "antd";
import ServiceBanner from "../../components/home/ServiceBanner";

const WhatWeAre = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-10 py-10">
      <h3 className="text-xl">WHAT WE ARE</h3>
      <h2
        style={{ fontFamily: "Protest Revolution, sans-serif" }}
        className="text-2xl md:text-5xl tracking-wider text-center"
      >
        We Expertise Find A Solutions <br /> For Criminal Cases
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-5 w-full gap-5 md:gap-10">
        <button className="border p-2 md:p-5 border-black text-black hover:bg-black hover:text-white hover:border-white transition-all">
          Services
        </button>
        <button className="border p-2 md:p-5 border-black text-black hover:bg-black hover:text-white hover:border-white transition-all">
          Services
        </button>
        <button className="border p-2 md:p-5 border-black text-black hover:bg-black hover:text-white hover:border-white transition-all">
          Services
        </button>
        <button className="border p-2 md:p-5 border-black text-black hover:bg-black hover:text-white hover:border-white transition-all">
          Services
        </button>
        <button className="border p-2 md:p-5 border-black text-black hover:bg-black hover:text-white hover:border-white transition-all">
          Services
        </button>
      </div>
      <ServiceBanner />
      <Divider />
    </div>
  );
};

export default WhatWeAre;
