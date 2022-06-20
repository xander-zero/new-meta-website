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
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Slider = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const commentData = [
    {
      id: "1",
      img: face1,
      name: languageData.comment_person_name_1,
      job: languageData.comment_person_job_1,
      desciption: languageData.comment_person_1,
    },
    {
      id: "2",
      img: face2,
      name: languageData.comment_person_name_1,
      job: languageData.comment_person_job_1,
      desciption: languageData.comment_person_1,
    },
    {
      id: "3",
      img: face3,
      name: languageData.comment_person_name_1,
      job: languageData.comment_person_job_1,
      desciption: languageData.comment_person_1,
    },
    {
      id: "4",
      img: face4,
      name: languageData.comment_person_name_1,
      job: languageData.comment_person_job_1,
      desciption: languageData.comment_person_1,
    },
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#6a7c92"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#6a7c92"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

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
        <div className="m-10 text-center show-slide">
          <Zoom {...zoomInProperties}>
            {commentData.map((each, index) => (
              <div key={index} className="flex justify-center w-full h-full">
                <Image src={each.img} alt={each.name} />
                <Typography textAlign="center" color="#1e1666" className="m-0">
                  {each.name}
                </Typography>
                <Typography textAlign="center" color="#2f1ed3" className="pb-3">
                  {each.job}
                </Typography>
                <Typography textAlign="center" color="#6a7c92" className="pb-3">
                  {each.desciption}
                </Typography>
              </div>
            ))}
          </Zoom>
        </div>
      </SliderStyle>
    </Container>
  );
};

export default Slider;
