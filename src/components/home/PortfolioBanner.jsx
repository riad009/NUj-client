import PortfolioBannerCard from "./PortfolioBannerCard";
const PortfolioBanner = () => {
  return (
    <div className=" mb-10">
      <div className="w-10/12 md:w-11/12 mx-auto flex flex-col justify-center items-center min-h-screen space-y-10">
        <h3 className="text-xl">OUR PORTFOLIO</h3>
        <h2
          style={{ fontFamily: "Protest Revolution, sans-serif" }}
          className="text-2xl md:text-5xl tracking-wider text-center"
        >
          Recent Cases & Successes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <PortfolioBannerCard />
          <PortfolioBannerCard />
          <PortfolioBannerCard />
          <PortfolioBannerCard />
          <PortfolioBannerCard />
          <PortfolioBannerCard />
          <PortfolioBannerCard />
          <PortfolioBannerCard />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
