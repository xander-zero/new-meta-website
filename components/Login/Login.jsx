import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../InputField/InputField";
import Button from "../../components/Button/Button";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { LoginWrapper } from "./LoginStyle";
import logo from "../../assets/img/metanextlogo.png";
import Typography from "../Typography/Typography";
import login from "../../assets/img/18208ererer789.png";
const Login = () => {
  const [type, setType] = useState("login");

  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <LoginWrapper>
      <div className="login-wrapper">
        <div className="row d-flex">
          <div className="col-6 h-100 image-login">
            <Image src={login} layout="intrinsic" alt="" />
          </div>
          <div className="col-6 right-section ">
            <div className="row">
              <div className="col-6 image-logo">
                <Image
                  src={logo}
                  layout="intrinsic"
                  width="70px"
                  height="60px"
                  alt=""
                />
              </div>
              {/* <div className="col-6">
                <SwitchToggle />
              </div> */}
            </div>
            <div className="w-100 mt-5">
              <Typography color="#1e1666" weight="bold" className="mb-0">
                {languageData?.login_title}
              </Typography>
            </div>
            <div className="row mt-2">
              {type === "login" ? null : (
                <>
                  <div className="col-lg-6 col-md-6 col-12">
                    <InputField placeholder="نام" label="نام" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <InputField
                      placeholder="نام خانوادگی"
                      label="نام خانوادگی"
                    />
                  </div>
                </>
              )}
              <div className="col-12">
                <InputField
                  placeholder="09351234567"
                  label={languageData.login_label_phonenumber}
                />
              </div>
              <div className="col-12">
                <InputField
                  placeholder="******"
                  label={languageData.login_label_password}
                />
              </div>
              <div className="col-12 my-2">
                <Button bgColor="#3E1F92" color="#fff">
                  {type === "login"
                    ? languageData.login_label_button
                    : languageData.singin_label_button}
                </Button>
                <div style={{ marginTop: ".5rem" }}>
                  <Typography size="12px">
                    {`${languageData.change_login_mode}, `}
                    <span
                      style={{
                        color: "#508BED",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      {languageData.singup_label_button}
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
