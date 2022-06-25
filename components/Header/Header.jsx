import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderStyle } from "./HeaderStyle";
import { Container } from "react-bootstrap";
import HeaderImg from "../../assets/img/Header-img.jpg";
import CrmLogo from "../../assets/img/CrmAgency.png";
import Image from "next/image";
import logo from "../../assets/img/2515215215.png";
import Typography from "../Typography/Typography";
import NavbarCont from "../Navbar/Navbar";
// import Button from "../Button/Button";
import { useRouter } from "next/router";
// import en from "../../public/static/locales/en/common.json";
// import fa from "../../public/static/locales/fa/common.json";
const Header = () => {
  // const router = useRouter();
  // const t = router?.locale === "en" ? en : fa;

  const [scrollPosition, setScrollPosition] = useState(0);
  const [width, setWidth] = useState(null);
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const widthInnter = window.innerWidth;
    setWidth(widthInnter);
  }, []);

  if (!languageData) {
    return <h1>Loading...</h1>;
  }

  return (
    <HeaderStyle
      id="home"
      image={HeaderImg}
      navbgColor={
        scrollPosition !== 0 ? "#fff" : width < 568 ? "transparent" : ""
      }
    >
      <NavbarCont
        image={logo}
        fix={""}
        color={scrollPosition !== 0 ? "#6A7C92" : "#fff"}
        bgColor={scrollPosition !== 0 ? "#6A7C92" : "#1e1666"}
      />
      <Container>
        <div className="row mt-5">
          <div className="col-lg-6 mt-lg-5 col-md-12 text-wrapper">
            <Typography
              weight="bold"
              color="#fff"
              size="44px"
              className="page-title"
            >
              {languageData.title_header}
            </Typography>
            <Typography color="#fff" className="page-title-description">
              {languageData.desc_header}
            </Typography>
            {/* <Button size="12px" bgColor="#2513d1" color="#fff">
              {t.button_header}
            </Button> */}
          </div>
          <div className="col-lg-6 d-lg-block d-none">
            <Image
              src={CrmLogo}
              alt="Picture of the author"
              width="50px"
              height="50px"
              layout="responsive"
              className="crm-logo"
            />
          </div>
        </div>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
