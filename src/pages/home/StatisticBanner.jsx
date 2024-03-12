const StatisticBanner = () => {
  return (
    <div className="bg-[#f4ede4] min-h-screen flex">
      <div className="w-11/12 md:w-9/12 mx-auto flex justify-center items-center flex-col gap-5 md:gap-10 py-10 text-center md:text-start">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Teams Large & Small Rely on NUj
        </h1>
        <p className="text-lg md:text-xl font-medium -tracking-wider">
          NUj securely unites staffs and participants around the world
        </p>
        <div className=" space-y-2 md:space-x-2">
          <button className="p-btn w-full md:w-auto ">
            Meet NUj for enterprise
          </button>
          <button className="p-btn w-full md:w-auto !text-primary !bg-white !border !border-primary">
            Talk to Sales
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start">
          <div className="flex flex-col gap-2 p-10">
            <h2 className="text-5xl text-primary font-bold">80%</h2>
            <p>of users say NUj has improved communication*</p>
          </div>
          <div className="flex flex-col gap-2 p-10">
            <h2 className="text-5xl text-primary font-bold">90%</h2>
            <p>feel their ability to work remotely has improved*</p>
          </div>
          <div className="flex flex-col gap-2 p-10">
            <h2 className="text-5xl text-primary font-bold">95%</h2>
            <p>feel more connected to their teams*</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticBanner;
