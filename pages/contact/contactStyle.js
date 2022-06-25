import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  position: relative;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  border-radius: 10px;
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;
  background-color: #3e1f92;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Left = styled.div`
  width: 50%;
  margin: 0 1rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 0.3rem;
  border: 1px solid #e4e7eb;
  outline: none;
  padding: 0.4rem;
  font-size: 12px;
  height: 150px;
`;
export const Label = styled.label`
  font-size: 13px;
  margin-top: 8px;
`;

export const SocialMedia = styled.div`
  margin: 1rem 0 6rem 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    svg {
      margin: 0 0.5rem;
    }
    /* align-items: center; */
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fa949d;
  position: absolute;
  bottom: -75px;
  right: ${({ right }) => right};
  z-index: 1;
`;

export const SocialMediaIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  transition: 0.5s ease-in-out;

  ul {
    list-style: none;
    display: flex;

    li {
      margin: 0.5rem;
      padding: 0.5rem;
      transition: 0.4s ease-in-out;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color: #fa949d;
        transform: translateY(-5px);
      }
    }
  }
`;
