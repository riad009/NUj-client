import AssistanceBanner from "../../components/home/AssistanceBanner";
import Hero from "./Hero";
import StepsToConnect from "./StepsToConnect";
import WhatWeAre from "./WhatWeAre";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeAre />
      <StepsToConnect />
      <AssistanceBanner />
      <div className="min-h-screen"></div>
    </div>
  );
};

export default Home;
