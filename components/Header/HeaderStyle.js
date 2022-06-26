import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: url(${(props) => props.image.src});
  height: 820px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .page-title {
    font-family: IRANSansBold;
    margin-top: 50px;
    font-stretch: 125% !important;
    /* transform: scaleX(1); */
  }
  .page-title-description {
    line-height: 2;
  }
  @media (max-width: 991px) {
    height: 560px;
  }
  @media (max-width: 768px) {
    .text-wrapper {
      text-align: center;
    }
    .page-title {
      font-size: 30px;
      margin-top: 40px;
    }
    .page-title-description {
      font-size: 14px;
    }
  }
  .navbar {
    background-color: ${({ navbgColor }) => navbgColor};
    transition: all 0.4s;
    .navbar-brand {
      height: 50px;
      width: 50px;
    }
    .nav-link {
      margin: 20px 16px;
      padding: 0;
    }
    .collapsing {
      position: absolute;
      width: 100%;
      top: 68px;
      z-index: 1;
      left: 0px !important;
      right: 0px !important;

      @media (max-width: 992px) {
        background-color: #6417a3;
      }
    }
    .collapse.show {
      position: absolute;
      width: 100%;
      top: 68px;
      z-index: 1;
      left: 0px !important;
      right: 0px !important;
      @media (max-width: 992px) {
        background-color: #6417a3;
      }
    }
  }
  @keyframes mymove {
    from {
      top: 0px;
    }
    to {
      top: 40px;
    }
  }
  .crm-logo {
    animation: mymove 1s ease-in-out 0s infinite alternate;
  }
`;
