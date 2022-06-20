import styled from "styled-components";
export const SwitchWrapper = styled.div`
  .button.r {
    border-radius: 100px;
  }
  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .button {
    position: relative;
    top: 50%;
    width: 74px;
    height: 36px;
    margin-right: auto;
    overflow: hidden;
  }
  .button.r,
  .button.r .layer {
    border-radius: 100px;
  }
  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }
  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background-color: #fd761a2b;
    transition: 0.3s ease all;
    z-index: 1;
  }
  #button-4 .knobs:before,
  #button-4 .knobs:after {
    position: absolute;
    top: 4px;
    left: 4px;
    width: fit-content;
    height: fit-content;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #490acb;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #button-4 .knobs:before {
    content: "ثبت نام";
  }

  #button-4 .knobs:after {
    content: "ورود";
  }

  #button-4 .knobs:after {
    top: -28px;
    right: 4px;
    left: auto;
    background-color: #ff7518;
  }

  #button-4 .checkbox:checked + .knobs:before {
    top: -28px;
  }

  #button-4 .checkbox:checked + .knobs:after {
    top: 4px;
  }

  #button-4 .checkbox:checked ~ .layer {
    background-color: #671cac2e;
  }
`;
