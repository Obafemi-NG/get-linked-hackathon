import { FC } from "react";
import Hero from "../../components/elementComponents/Hero/Hero";
import Overview from "../../components/elementComponents/Overview/Overview";
import Faq from "../../components/elementComponents/Faq/Faq";
import TimeilineComponent from "../../components/elementComponents/TimelineComponent/TimeilineComponent";
import Prize from "../../components/elementComponents/Prize/Prize";
import Sponsor from "../../components/elementComponents/Sponsors/Sponsor";
import PrivacyPolicy from "../../components/elementComponents/PrivacyPolicy/PrivacyPolicy";
import Footer from "../../components/elementComponents/Footer/Footer";

const LandingPage: FC = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Faq />
      <TimeilineComponent />
      <Prize />
      <Sponsor />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default LandingPage;
