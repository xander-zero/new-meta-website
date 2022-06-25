import { useEffect } from "react";
import { useSelector } from "react-redux";
import AboutUs from "../components/AboutUs/AboutUs";
import HeadTitle from "../components/HeadTitle/HeadTitle";
import Security from "../components/Security/Security";
import Services from "../components/Services/Services";
import Slider from "../components/Slider/Slider";
import Strategies from "../components/Strategies/Strategies";
import Support from "../components/Support/Support";

const Home = () => {
  const languageSelctor = useSelector((state) => state.language);
  const { languageData } = languageSelctor;

  return (
    <>
      <HeadTitle
        title={languageData.main_title}
        content={languageData.main_desc}
      />
      <Strategies />
      <AboutUs />
      <Support />
      <Services />
      <Security />
      <Slider />
    </>
  );
};

export default Home;
