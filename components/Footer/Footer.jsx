import { Wrapper } from "../../styles/GlobalStyle";
import CardList from "../CardList/CardList";
import Typography from "../Typography/Typography";
import { FooterStyle } from "./footerStyle";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { TbBrandTelegram, TbBrandInstagram } from "react-icons/tb";
import NavbarCont from "../Navbar/Navbar";
import { Icon } from "../Card/cardStyle";
import { useSelector } from "react-redux";
import bgFooter from "../../assets/img/animatedshape.svg";
import { useRouter } from "next/router";
const Footer = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const router = useRouter();

  const items = [
    {
      id: "1",
      icon: (
        <a href={languageData.title_email_footer} rel="nofollow">
          <HiOutlineLocationMarker
            color="#fff"
            style={{ fontWeight: "bold" }}
            size={20}
          />
        </a>
      ),
      title: languageData.title_phonenumber_footer,
      desc: router.locale === "en" ? "+98-9152484006" : "98-9152484006+",
    },
    {
      id: "2",
      icon: (
        <a
          href={`https://www.instagram.com/${languageData.title_email_footer}`}
          rel="nofollow"
        >
          <TbBrandInstagram
            color="#fff"
            style={{ fontWeight: "bold" }}
            size={20}
          />
        </a>
      ),
      title: languageData.title_email_footer,
      desc: "info@metanext.bis",
    },
    {
      id: "3",
      icon: (
        <a
          href={`https://t.me/${languageData.title_email_footer}`}
          rel="nofollow"
        >
          <TbBrandTelegram
            color="#fff"
            style={{ fontWeight: "bold" }}
            size={20}
          />
        </a>
      ),
      title: languageData.address_company,
      desc: languageData.address_company_desc,
    },
  ];

  if (!languageData) {
    return <h1>Loading...</h1>;
  }
  return (
    <FooterStyle image={bgFooter}>
      <div className="container">
        <Typography size="35px" weight="bold" color="#fff" textAlign="center">
          Meta Next
        </Typography>
        <Wrapper postion="space-between">
          <CardList items={items} color="#fff" />
        </Wrapper>
        <Wrapper postion="center">
          <NavbarCont image={`/`} />
        </Wrapper>
        <Wrapper postion="center">
          <Typography color="#fff" weight="100">
            Copyright ?? itsolve all rights reserved
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
