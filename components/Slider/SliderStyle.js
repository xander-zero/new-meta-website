import styled from "styled-components";
export const SliderStyle = styled.div`
  min-height: 200px;
  margin: 0 auto;
  .swiper {
    z-index: 0;
  }
  .mySwiper {
    width: 100%;
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #bfcadc;
      height: 5px;
      width: 25px;
      display: inline-block !important;
      margin: 0 3px;
      border-radius: 50px;
      transition: 0.5s;
    }
    .swiper-pagination-bullet-active {
      background: #2513d1;
      width: 35px;
    }
  }
`;
