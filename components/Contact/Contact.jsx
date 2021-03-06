import styled from "styled-components";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Typography from "../Typography/Typography";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const ContactForm = () => {
  const router = useRouter();
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <Wrapper>
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
              {router.locale === "en" ? (
                <Typography en size="14px" color="#E0D5EF">
                  +98-9152484006
                </Typography>
              ) : (
                <Typography size="14px" color="#E0D5EF">
                  98-9152484006+
                </Typography>
              )}
            </li>
            <li>
              <MdEmail size={20} color="#FA949D" />
              <Typography size="14px" color="#E0D5EF">
                info@metanext.bis
              </Typography>
            </li>
            <li>
              <MdLocationPin size={20} color="#FA949D" />
              <Typography size="14px" color="#E0D5EF">
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
        <Circle2
          right={router.locale === "en" ? "80%" : "-75px"}
          // left={router.locale === "fa" || router.locale === "ar" ? right}
        ></Circle2>
      </Right>
      <Left>
        <Typography weight="bold" size="20px" color="#1e1666">
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
            <TextArea placeholder={languageData.contact_desc}></TextArea>
          </div>
          <div className="col-12 mt-2">
            <Button color="#fff" bgColor="#3E1F92" width="150px" size="14px">
              {languageData.contact_button}
            </Button>

            <Button
              className="mx-2"
              color="#fff"
              bgColor="#FA949D"
              width="150px"
              size="14px"
              onClick={() => router.push("/")}
            >
              {languageData.contact_button_back}
            </Button>
          </div>
        </div>
      </Left>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  position: relative;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 0;
  }

  @media (max-width: 568px) {
    box-shadow: none;
    height: 160vh !important;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  background-color: #3e1f92;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: relative;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding: 2rem;
    width: 100%;
  }
  @media (max-width: 568px) {
    padding: 1rem 0.5rem;
    height: 50vh;
  }
`;

const Left = styled.div`
  width: 50%;
  margin: 0 1rem;
  @media (max-width: 1024px) {
    padding: 2rem;
    width: 100%;
  }

  @media (max-width: 568px) {
    padding: 1rem 0.5rem;
    height: 50vh;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-top: 0.3rem;
  border: 2px solid #dad8e0;
  outline: none;
  padding: 0.4rem;
  font-size: 14px;
  height: 150px;
`;
const Label = styled.label`
  font-size: 14px;
  margin-top: 8px;
  color: #3e1f92;
  font-weight: bold;
`;

const SocialMedia = styled.div`
  margin: 1rem 0 6rem 0;
  @media (max-width: 1024px) {
    margin: 1rem 0 1rem 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    svg {
      margin: 0 0.5rem;
    }
    /* align-items: center; */
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fa949d;
  position: absolute;
  bottom: -75px;
  right: ${({ right }) => right};
  z-index: 1;
`;

const SocialMediaIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  transition: 0.5s ease-in-out;
  position: absolute;
  bottom: 5%;
  right: 10%;
  ul {
    list-style: none;
    display: flex;

    li {
      margin: 0.5rem;
      padding: 0.5rem;
      transition: 0.4s ease-in-out;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color: #fa949d;
        transform: translateY(-5px);
      }
    }
  }
`;

const Circle2 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #7e53fa;
  z-index: 10;
`;

export default ContactForm;
