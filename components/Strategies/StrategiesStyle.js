import styled from "styled-components";
export const StrategiesWrapper = styled.div`
  margin-top: -70px;
  .cart {
    height: fit-content;
    text-align: center;
    box-shadow: 0 0 3px #cccccc;
    padding: 20px 15px 20px;
    transition: 0.5s;
    background: #fff;
    margin-bottom: 30px;
    border-radius: 10px;
    &:hover {
      box-shadow: 0 0 10px #cccccc;
      transform: translate3d(0, -10px, 0);
    }
  }

  .scale-up-center {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
