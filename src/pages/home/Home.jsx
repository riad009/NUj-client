import AssistanceBanner from "../../components/home/AssistanceBanner";
import PortfolioBanner from "../../components/home/PortfolioBanner";
import Hero from "./Hero";
import StatisticBanner from "./StatisticBanner";
import StepsToConnect from "./StepsToConnect";
import WhatWeAre from "./WhatWeAre";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <WhatWeAre /> */}
      {/* <StepsToConnect /> */}
      {/* <AssistanceBanner />
      <PortfolioBanner /> */}
      <StatisticBanner />
    </div>
  );
};

export default Home;
