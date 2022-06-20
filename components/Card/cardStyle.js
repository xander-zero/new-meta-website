import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  border-radius: 10px;
  margin: 0.5rem 0;
  padding: 40px 25px 20px;
  border-radius: 10px;
  transition: 0.5s;
  margin-bottom: 30px;
  box-shadow: 0 0 1px #cccccc;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 50px 0 rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 568px) {
    width: 100% !important;
  }
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  background-color: #2513d1;
  border-radius: 10px;
  cursor: pointer;
  margin: ${({ space }) => (space ? space : "")};
`;

export const Space = styled.div`
  margin-top: 1rem;
`;
