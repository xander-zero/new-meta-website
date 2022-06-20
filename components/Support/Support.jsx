import React from "react";
import Typography from "../Typography/Typography";
import { SupportWrapper } from "./SupportStyle";
import Image from "next/image";
import seo from "../../assets/img/web-marketing.jpg";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HeaderTitle } from "../../styles/GlobalStyle";
import { useRouter } from "next/router";
const Support = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;
  const router = useRouter();

  return (
    <SupportWrapper id="support">
      <Container>
        <div className="row mt-5">
          <div className="col-lg-6 d-flex justify-content-center">
            <Image layout="intrinsic" src={seo} alt="" />
          </div>
          <div className="col-lg-6 mt-5">
            <Typography color="#2513d1" className="mb-1">
              {languageData.support_title}
            </Typography>
            <HeaderTitle size="30px" color="#1e1666">
              {languageData.support_subTitle}
            </HeaderTitle>
            <Typography color="#6a7c92" className="mt-3">
              {languageData.support_desc}
            </Typography>
            <div className="d-flex justify-content-evenly w-100">
              <div>
                {router.locale === "en" ? (
                  <>
                    <Typography en size="20px" color="#1E1666">
                      1,000,000+
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography size="20px" color="#1E1666">
                      1,000,000+
                    </Typography>
                  </>
                )}
                <Typography size="14px" color="#1E1666">
                  {languageData.happy_client}
                </Typography>
              </div>
              <div>
                {router.locale === "en" ? (
                  <>
                    <Typography en size="20px" color="#1E1666">
                      150,000 hour
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography size="20px" color="#1E1666">
                      150,000 ساعت
                    </Typography>
                  </>
                )}
                <Typography size="14px" color="#1E1666">
                  {languageData.project_done}
                </Typography>
              </div>
              <div>
                {router.locale === "en" ? (
                  <>
                    <Typography en size="20px" color="#1E1666">
                      50 person
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography size="20px" color="#1E1666">
                      50 نفر
                    </Typography>
                  </>
                )}
                <Typography size="14px" color="#1E1666">
                  {languageData.win_awar}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SupportWrapper>
  );
};

export default Support;
