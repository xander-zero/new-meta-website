import styled from "styled-components";
export const SecurityWrapper = styled.div`
  background: transparent url(${(props) => props.image.src}) center center/cover
    no-repeat scroll;
  height: fit-content;
  padding-bottom: 65px;
  border-bottom: 1px solid #d9d9d9;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
