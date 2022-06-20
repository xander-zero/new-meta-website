import styled from "styled-components";
export const AboutUsWrapper = styled.div`
  background: transparent url(${(props) => props.image.src}) center center/cover
    no-repeat scroll;
  height: fit-content;
  padding-bottom: 65px;
`;
