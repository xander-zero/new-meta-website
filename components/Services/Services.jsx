import { Row, ServiceStyle } from "./serviceStyle";
import { Wrapper } from "../../styles/GlobalStyle";
import bgService from "../../assets/img/SEO-BG.jpg";
import Typography from "../Typography/Typography";
import CardList from "../CardList/CardList";
import { useSelector } from "react-redux";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
const Services = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  if (!languageData) {
    return <h1>Loading...</h1>;
  }

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
      title: languageData.service_one_pannel,
      desc: languageData.service_one_pannel_desc,
    },
    {
      id: "2",
      icon: (
        <HiOutlineMail color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.service_two_pannel,
      desc: languageData.service_two_pannel_desc,
    },
    {
      id: "3",
      icon: (
        <HiOutlinePhone color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.service_three_pannel,
      desc: languageData.service_three_pannel_desc,
    },
    {
      id: "4",
      icon: (
        <HiOutlineLocationMarker
          color="#fff"
          style={{ fontWeight: "bold" }}
          size={20}
        />
      ),
      title: languageData.service_four_pannel,
      desc: languageData.service_four_pannel_desc,
    },
    {
      id: "5",
      icon: (
        <HiOutlineMail color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.service_five_pannel,
      desc: languageData.service_five_pannel_desc,
    },
    {
      id: "6",
      icon: (
        <HiOutlinePhone color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.service_six_pannel,
      desc: languageData.service_six_pannel_desc,
    },
  ];

  return (
    <ServiceStyle img={bgService} id="service">
      <Row>
        <Typography size="30px" color="#fff" className="services-title">
          {languageData.title_pannel_management}
        </Typography>
        <Typography color="#fff" size="16px" className="service-description">
          {languageData.desc_pannel_management}
        </Typography>
      </Row>
      <Wrapper postion="space-between" className="container">
        <CardList
          textAlign="center"
          bgColor="#FFFFFF"
          items={items}
          color="#1e1666"
        />
      </Wrapper>
    </ServiceStyle>
  );
};
export default Services;
