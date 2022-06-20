import React from "react";
import { useSelector } from "react-redux";
import { SliderStyle } from "./SliderStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Container } from "react-bootstrap";
import Typography from "../Typography/Typography";
import face1 from "../../assets/img/face1.jpg";
import face2 from "../../assets/img/face2.jpg";
import face3 from "../../assets/img/face3.jpg";
import face4 from "../../assets/img/face4.jpg";
import Image from "next/image";
import { HeaderTitle } from "../../styles/GlobalStyle";
const Slider = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <Container>
      <SliderStyle>
        <div className="w-100 text-center mt-5">
          <Typography
            textAlign="center"
            color="#2513d1"
            size="20px"
            className="mb-0"
          >
            {languageData.comment_people_title}
          </Typography>
          <HeaderTitle color="#1e1666" size="34px">
            {languageData.comment_people_subTitle}
          </HeaderTitle>
        </div>
        <div style={{ width: "100vm", justifyContent: "center" }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide style={{ width: "100%" }}>
              <div className="wrapper text-center">
                <Image layout="fixed" src={face1} alt="" />
                <Typography className="w-50 mx-auto" color="#6a7c92">
                  {languageData.comment_person_1}
                </Typography>
                <Typography textAlign="center" color="#1e1666" className="m-0">
                  {languageData.comment_person_name_1}
                </Typography>
                <Typography textAlign="center" color="#2f1ed3" className="pb-3">
                  {languageData.comment_person_job_1}
                </Typography>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrapper text-center">
                <Image layout="fixed" src={face2} alt="" />
                <Typography className="w-50 mx-auto" color="#6a7c92">
                  Soren very company business under-full for adipisicing
                  eliterdo eiusmod tempor asem incididuntlabore dolore magna.
                </Typography>
                <Typography textAlign="center" color="#1e1666" className="m-0">
                  Ira Melon
                </Typography>
                <Typography textAlign="center" color="#2f1ed3" className="pb-3">
                  CEO Founder
                </Typography>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrapper text-center">
                <Image layout="fixed" src={face3} alt="" />
                <Typography className="w-50 mx-auto" color="#6a7c92">
                  Soren very company business under-full for adipisicing
                  eliterdo eiusmod tempor asem incididuntlabore dolore magna.
                </Typography>
                <Typography textAlign="center" color="#1e1666" className="m-0">
                  Ira Melon
                </Typography>
                <Typography textAlign="center" color="#2f1ed3" className="pb-3">
                  CEO Founder
                </Typography>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrapper text-center">
                <Image layout="fixed" src={face4} alt="" />
                <Typography className="w-50 mx-auto" color="#6a7c92">
                  Soren very company business under-full for adipisicing
                  eliterdo eiusmod tempor asem incididuntlabore dolore magna.
                </Typography>
                <Typography textAlign="center" color="#1e1666" className="m-0">
                  Ira Melon
                </Typography>
                <Typography textAlign="center" color="#2f1ed3" className="pb-3">
                  CEO Founder
                </Typography>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </SliderStyle>
    </Container>
  );
};

export default Slider;
