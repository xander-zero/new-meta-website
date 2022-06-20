import { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../styles/GlobalStyle";
import en from "../public/static/locales/en/common.json";
import fa from "../public/static/locales/fa/common.json";
import ar from "../public/static/locales/ar/common.json";
// styled component
import { Wrapper } from "./mainLayoutStyle";
import { useEffect } from "react";
import { setLanguage } from "../redux/action/language";
import { useDispatch } from "react-redux";
import HeadTitle from "../components/HeadTitle/HeadTitle";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const language = router.locale;
  const languageData = language === "en" ? en : language === "fa" ? fa : ar;

  useEffect(() => {
    if (language === "en") {
      document.body.style.direction = "ltr";
      dispatch(setLanguage(languageData));
    } else {
      document.body.style.direction = "rtl";
      dispatch(setLanguage(languageData));
    }
  }, [language, dispatch]);

  return (
    <Wrapper>
      <HeadTitle lng={language} />
      <GlobalStyle />
      {router.pathname === "/login" ? null : <Header />}
      {children}
      <div className="d-flex">
        {router.pathname === "/login" ? null : <Footer />}
      </div>
    </Wrapper>
  );
};

export default MainLayout;
