import { SecurityWrapper } from "./securityStyle";
import { useSelector } from "react-redux";
import bg from "../../assets/img/aboutusBg.png";
import seo from "../../assets/img/387.jpg";
import { Container } from "react-bootstrap";
import Typography from "../Typography/Typography";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Image from "next/image";
const Security = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  if (!languageData) {
    return <h1>Loading...</h1>;
  }
  return (
    <SecurityWrapper image={bg} id="about">
      <Container>
        <div className="row mt-5">
          <div className="col-lg-6 d-flex justify-content-center">
            <Image src={seo} layout="intrinsic" alt="" />
          </div>
          <div className="col-lg-6">
            <Typography
              size="24px"
              weight="bold"
              color="#2513d1"
              className="mb-1"
            >
              {languageData.title_security}
            </Typography>
            <Typography size="20px" color="#1e1666">
              {languageData.subTitle_security}
            </Typography>
            <Typography color="#6a7c92" className="mt-3">
              {languageData.desc_serurity}
            </Typography>
            <ul className="p-0 m-0">
              <li className="d-flex">
                <div className="mx-2">
                  <IoCheckmarkCircleOutline size="30px" color="#2513d1" />
                </div>
                <div className="me-3">
                  <Typography
                    weight="bold"
                    color="#1e1666"
                    className="mt-1 mb-0"
                  >
                    {languageData.title_smart_security}
                  </Typography>
                  <Typography color="#6a7c92">
                    {languageData.desc_smart_security}
                  </Typography>
                </div>
              </li>
              <li className="d-flex">
                <div className="mx-2">
                  <IoCheckmarkCircleOutline size="30px" color="#2513d1" />
                </div>
                <div className="me-3">
                  <Typography
                    weight="bold"
                    color="#1e1666"
                    className="mt-1 mb-0"
                  >
                    {languageData.title_encrypt_security}
                  </Typography>
                  <Typography color="#6a7c92">
                    {languageData.desc_encrypt_security}
                  </Typography>
                </div>
              </li>
              <li className="d-flex">
                <div className="mx-2">
                  <IoCheckmarkCircleOutline size="30px" color="#2513d1" />
                </div>
                <div className="me-3">
                  <Typography
                    weight="bold"
                    color="#1e1666"
                    className="mt-1 mb-0"
                  >
                    {languageData.title_backup_security}
                  </Typography>
                  <Typography color="#6a7c92">
                    {languageData.desc_backup_security}
                  </Typography>
                </div>
              </li>
              <li className="d-flex">
                <div className="mx-2">
                  <IoCheckmarkCircleOutline size="30px" color="#2513d1" />
                </div>
                <div className="me-3">
                  <Typography
                    weight="bold"
                    color="#1e1666"
                    className="mt-1 mb-0"
                  >
                    {languageData.title_xander_security}
                  </Typography>
                  <Typography color="#6a7c92">
                    {languageData.desc_xander_security}
                  </Typography>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </SecurityWrapper>
  );
};

export default Security;
