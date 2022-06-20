import styled from "styled-components";

export const ServiceStyle = styled.div`
  background-image: url(${(props) => props.img.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  .services-title {
    @media (max-width: 768px) {
      font-size: 30px;
      margin-bottom: 5px;
    }
  }
  .service-description {
    @media (max-width: 768px) {
      line-height: 1.8;
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
