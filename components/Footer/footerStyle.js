import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #1e1666;
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
