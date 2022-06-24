import styled from "styled-components";

export const FooterStyle = styled.div`
  background: url(${(props) => props.image.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 568px) {
    padding: 2rem 1rem;
  }
`;
