import React from "react";
import { NavbarWrapper } from "./NavbarWrapper";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Typography from "../Typography/Typography";
import SimpleSelect from "../Select/Select";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { handleScroll } from "../../helper/smoothScroll";
const NavbarCont = ({ image, fix }) => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const router = useRouter();
  const type = router.locale;
  const languages = [
    {
      id: "1",
      label: "فارسی",
      value: "fa",
    },
    {
      id: "2",
      label: "English",
      value: "en",
    },
    {
      id: "3",
      label: "عربی",
      value: "ar",
    },
  ];

  const onChange = (event) => {
    const lng = event.target.value;
    router.push("/", "/", { locale: lng });
  };

  return (
    <NavbarWrapper>
      <Navbar collapseOnSelect expand="lg" fixed={fix}>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className={
                type === "fa"
                  ? "ms-auto"
                  : type === "en"
                  ? "me-auto"
                  : "ms-auto"
              }
            >
              <Nav.Link>
                <SimpleSelect
                  placeholder="انتخاب زبان"
                  options={languages}
                  onChange={onChange}
                  value={type}
                />
              </Nav.Link>
              <div>
                <Link href="/login" passHref>
                  <Nav.Link>
                    <Typography color="#fff">
                      {languageData.menu_item_auth}
                    </Typography>
                  </Nav.Link>
                </Link>
              </div>
              <div onClick={() => handleScroll("home", "start")}>
                <Nav.Link href="#" id={languageData.menu_item_about}>
                  <Typography color="#fff">
                    {languageData.menu_item_home}
                  </Typography>
                </Nav.Link>
              </div>
              <div onClick={() => handleScroll("about", "start")}>
                <Nav.Link href="#">
                  <Typography color="#fff">
                    {languageData.menu_item_about}
                  </Typography>
                </Nav.Link>
              </div>
              <div onClick={() => handleScroll("support", "start")}>
                <Nav.Link href="#">
                  <Typography color="#fff">
                    {languageData.menu_item_contact}
                  </Typography>
                </Nav.Link>
              </div>
              <div onClick={() => handleScroll("service", "start")}>
                <Nav.Link href="#">
                  <Typography color="#fff">
                    {languageData.menu_item_service}
                  </Typography>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand
            href="#home"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90px",
            }}
          >
            <Image
              src={image}
              alt="Picture of the author"
              width="100px"
              height="100px"
              layout="intrinsic"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
};

export default NavbarCont;
