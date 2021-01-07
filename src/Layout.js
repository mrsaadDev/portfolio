import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};

  @media screen and (max-width: 700px) {
    flex-direction: column !important;
  }
`;
