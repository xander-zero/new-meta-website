import { useSelector } from "react-redux";
import { AboutUsWrapper } from "./AboutUsStyle";
import bg from "../../assets/img/aboutusBg.png";
import seo from "../../public/buisnessdevelopment.png";
import { Container } from "react-bootstrap";
import Typography from "../Typography/Typography";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { HeaderTitle } from "../../styles/GlobalStyle";
const AboutUs = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  if (!languageData) {
    return <h1>Loading...</h1>;
  }
  return (
    <AboutUsWrapper image={bg} id="about">
      <Container>
        <div className="row mt-5">
          <div className="col-lg-6">
            <Typography color="#2513d1" className="mb-1">
              {languageData.title_about}
            </Typography>
            <HeaderTitle size="30px" color="#1e1666">
              {languageData.subTitle_about}
            </HeaderTitle>
            <Typography color="#6a7c92" className="mt-3">
              {languageData.desc_goal_about}
            </Typography>
            <ul className="p-0 m-0">
              <li className="d-flex">
                <div className="w-25">
                  <IoCheckmarkCircleOutline size="30px" color="#2513d1" />
                </div>
                <div className="me-3">
                  <Typography color="#1e1666" className="mt-1 mb-0">
                    {languageData.title_mention_about}
                  </Typography>
                  <Typography color="#6a7c92">
                    {languageData.desc_mention_about}
                  </Typography>
                </div>
              </li>
              <li className="d-flex">
                <div className="w-25">
                  <IoCheckmarkCircleOutline size="30px" color="#2513d1" />
                </div>
                <div className="me-3">
                  <Typography color="#1e1666" className="mt-1 mb-0">
                    {languageData.title_profecy_about}
                  </Typography>
                  <Typography color="#6a7c92">
                    {languageData.desc_profecy_about}
                  </Typography>
                </div>
              </li>
              <li className="d-flex">
                <div className="w-25">
                  <IoCheckmarkCircleOutline size="30px" color="#2513d1" />
                </div>
                <div className="me-3">
                  <Typography color="#1e1666" className="mt-1 mb-0">
                    {languageData.title_viewport_about}
                  </Typography>
                  <Typography color="#6a7c92">
                    {languageData.desc_viewport_about}
                  </Typography>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Image
              src={seo}
              layout="intrinsic"
              alt=""
              // style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Container>
    </AboutUsWrapper>
  );
};

export default AboutUs;
