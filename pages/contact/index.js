import {
  Wrapper,
  Left,
  Right,
  TextArea,
  Label,
  SocialMedia,
  Circle,
  SocialMediaIcon,
} from "./contactStyle";
import { Container } from "react-bootstrap";
import InputField from "../../components/InputField/InputField";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export default function Contact() {
  const router = useRouter();
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Wrapper>
        <Left>
          <Typography size="20px" color="#1e1666">
            {languageData.coontact_title}
          </Typography>
          <div className="row">
            <div className="col-6 mt-2">
              <InputField
                placeholder={languageData.contact_fullName}
                label={languageData.contact_fullName}
              />
            </div>
            <div className="col-6 mt-2">
              <InputField
                placeholder={languageData.contact_phoneNumber}
                label={languageData.contact_phoneNumber}
              />
            </div>
            <div className="col-12 mt-2">
              <InputField
                placeholder={languageData.contact_subject}
                label={languageData.contact_subject}
              />
            </div>
            <div className="col-12">
              <Label>{languageData.contact_desc}</Label>
              <TextArea></TextArea>
            </div>
            <div className="col-12 mt-2">
              <Button color="#fff" bgColor="#3E1F92" width="150px" size="14px">
                {languageData.contact_button}
              </Button>
            </div>
          </div>
        </Left>
        <Right>
          <Typography size="20px" color="#fff">
            {languageData.contact_subTitle}
          </Typography>
          <Typography color="#B9A1F4" size="14px">
            {languageData.contact_subTitle_desc}
          </Typography>
          <SocialMedia>
            <ul>
              <li>
                <BsTelephoneFill size={20} color="#FA949D" />
                <Typography color="#E0D5EF">051-91002131</Typography>
              </li>
              <li>
                <MdEmail size={20} color="#FA949D" />
                <Typography color="#E0D5EF">info@metanext.bis</Typography>
              </li>
              <li>
                <MdLocationPin size={20} color="#FA949D" />
                <Typography color="#E0D5EF">
                  {languageData?.address_company_desc}
                </Typography>
              </li>
            </ul>
          </SocialMedia>
          <SocialMediaIcon>
            <ul>
              <li>
                <BsTelephoneFill size={20} color="#fff" />
              </li>
              <li>
                <MdEmail size={20} color="#fff" />
              </li>
              <li>
                <MdLocationPin size={20} color="#fff" />
              </li>
            </ul>
          </SocialMediaIcon>
          <Circle
            right={router.locale === "en" ? "80%" : "-75px"}
            // left={router.locale === "fa" || router.locale === "ar" ? right}
          ></Circle>
        </Right>
      </Wrapper>
    </Container>
  );
}
