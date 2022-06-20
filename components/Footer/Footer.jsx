import { Wrapper } from "../../styles/GlobalStyle";
import CardList from "../CardList/CardList";
import Typography from "../Typography/Typography";
import { FooterStyle } from "./footerStyle";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import NavbarCont from "../Navbar/Navbar";
import { Icon } from "../Card/cardStyle";
import { useSelector } from "react-redux";
const Footer = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const items = [
    {
      id: "1",
      icon: (
        <HiOutlineLocationMarker
          color="#fff"
          style={{ fontWeight: "bold" }}
          size={20}
        />
      ),
      title: languageData.title_phonenumber_footer,
      desc: "1st Floor New World Tower Rang.",
    },
    {
      id: "2",
      icon: (
        <HiOutlineMail color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.title_email_footer,
      desc: "info@metanext.bis",
    },
    {
      id: "3",
      icon: (
        <HiOutlinePhone color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.address_company,
      desc: "+848 556 778 345",
    },
  ];

  if (!languageData) {
    return <h1>Loading...</h1>;
  }
  return (
    <FooterStyle>
      <div className="container">
        <Typography size="35px" weight="bold" color="#fff" textAlign="center">
          Behsod
        </Typography>
        <Wrapper postion="space-between">
          <CardList items={items} color="#fff" />
        </Wrapper>
        <Wrapper postion="center">
          <NavbarCont image={`/`} />
        </Wrapper>
        <Wrapper postion="center">
          <Typography color="#fff" weight="100">
            Copyright © itsolve all rights reserved
          </Typography>
        </Wrapper>
        <Wrapper postion="center">
          {items.map((item, index) => (
            <Icon key={index} space=".5rem">
              {item.icon}
            </Icon>
          ))}
        </Wrapper>
      </div>
    </FooterStyle>
  );
};

export default Footer;
