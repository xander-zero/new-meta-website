import Image from "next/image";
import React, { useState } from "react";
import { StrategiesWrapper } from "./StrategiesStyle";
import s1 from "../../assets/img/strategy1.jpg";
import s2 from "../../assets/img/strategy2.jpg";
import s3 from "../../assets/img/strategy3.jpg";
import s4 from "../../assets/img/photo_2022-06-19_14-58-34.jpg";

import { Container } from "react-bootstrap";
import Typography from "../Typography/Typography";
import { MdOutlineVideoSettings } from "react-icons/md";
import { useSelector } from "react-redux";
import { HeaderTitle } from "../../styles/GlobalStyle";

const Strategies = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;
  const [text, setText] = useState("crm");

  if (!languageData) {
    return <h1>Loading...</h1>;
  }
  return (
    <StrategiesWrapper id="strategies">
      <Container>
        <div className="row m-0 p-0">
          <div className="col-lg-6 col-12 d-flex align-items-center mt-5">
            <div className="scale-up-center">
              <Typography weight="bold" color="#2513d1" className="mb-1">
                {languageData.title_service}
              </Typography>
              <HeaderTitle size="30px" color="#1e1666">
                {text === "crm"
                  ? languageData.title_crm_service
                  : text === "account"
                  ? languageData.title_account_service
                  : text === "shop"
                  ? languageData.title_shop_service
                  : text === "mangeContent"
                  ? languageData.title_mangeContent_service
                  : ""}
              </HeaderTitle>
              <Typography color="#6a7c92">
                {text === "crm"
                  ? languageData.desc_crm_service
                  : text === "account"
                  ? languageData.desc_account_service
                  : text === "shop"
                  ? languageData.desc_shop_service
                  : text === "mangeContent"
                  ? languageData.desc_manageContent_service
                  : ""}
              </Typography>
              <MdOutlineVideoSettings size="30px" color="#2513d1" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                <div className="cart " onClick={() => setText("crm")}>
                  <Image
                    src={s4}
                    alt="Picture of the author"
                    layout="intrinsic"
                  />
                  <Typography
                    weight="bold"
                    size="16px"
                    className="mb-0 mt-3"
                    color="#1e1666"
                  >
                    {languageData.title_crm_service}
                  </Typography>
                  <Typography size="14px" className="mb-0 p-0" color="#6a7c92">
                    {`${languageData.desc_crm_service?.substring(0, 100)}...`}
                  </Typography>
                </div>
                <div className="cart" onClick={() => setText("account")}>
                  <Image
                    src={s1}
                    alt="Picture of the author"
                    layout="intrinsic"
                  />
                  <Typography
                    weight="bold"
                    size="16px"
                    className="mb-0 mt-3"
                    color="#1e1666"
                  >
                    {languageData.title_account_service}
                  </Typography>
                  <Typography size="14px" className="mb-0 p-0" color="#6a7c92">
                    {`${languageData.desc_account_service?.substring(
                      0,
                      100
                    )}...`}
                  </Typography>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="cart w-100"
                  onClick={() => setText("mangeContent")}
                >
                  <Image
                    src={s3}
                    alt="Picture of the author"
                    layout="intrinsic"
                  />
                  <Typography
                    weight="bold"
                    size="16px"
                    className="mb-0 mt-3"
                    color="#1e1666"
                  >
                    {languageData.title_all_services}
                  </Typography>
                  <Typography size="14px" className="mb-0 p-0" color="#6a7c92">
                    {`${languageData.desc_all_services?.substring(0, 100)}...`}
                  </Typography>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                <div className="cart" onClick={() => setText("shop")}>
                  <Image
                    src={s2}
                    alt="Picture of the author"
                    layout="intrinsic"
                  />
                  <Typography
                    weight="bold"
                    size="16px"
                    className="mb-0 mt-3"
                    color="#1e1666"
                  >
                    {languageData.title_shop_service}
                  </Typography>
                  <Typography size="14px" className="mb-0 p-0" color="#6a7c92">
                    {`${languageData.desc_shop_service?.substring(0, 100)}...`}
                  </Typography>
                </div>{" "}
                <div className="cart" onClick={() => setText("mangeContent")}>
                  <Image
                    src={s3}
                    alt="Picture of the author"
                    layout="intrinsic"
                  />
                  <Typography
                    weight="bold"
                    size="16px"
                    className="mb-0 mt-3"
                    color="#1e1666"
                  >
                    {languageData.title_mangeContent_service}
                  </Typography>
                  <Typography size="14px" className="mb-0 p-0" color="#6a7c92">
                    {`${languageData.desc_manageContent_service?.substring(
                      0,
                      100
                    )}...`}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StrategiesWrapper>
  );
};

export default Strategies;
