import styled from "styled-components";
export const LoginWrapper = styled.div`
  background-color: #f8fafb;
  height: 100vh;
  .login-wrapper {
    padding: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #fff;
    /* height: 500px; */
    width: 50%;
    border-radius: 25px;
    box-shadow: 0px 1px 40px #bdbdbd80;
    .row {
      @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .image-login {
        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }

    .image-login {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right-section {
      border-left: 1px solid #f4f4f4;
      padding: 20px;

      .image-logo {
        @media (max-width: 1024px) {
          width: 100%;
          align-items: flex-start;
        }

        @media (max-width: 768px) {
          display: none;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 568px) {
        width: 100%;
      }
    }

    @media (max-width: 1560px) {
      width: 70%;
    }
    @media (max-width: 1090px) {
      width: 85%;
    }
    @media (max-width: 760px) {
      width: 95%;
    }
    @media (max-width: 568px) {
      width: 95%;
      .left-section {
        display: none;
      }
    }
  }
`;
