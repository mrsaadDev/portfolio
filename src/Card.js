import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  display: flex;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: ${(props) => (props.project ? "0" : "20px")};
  width: ${(props) => (props.wide ? "560px" : "270px")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.user ? "space-between" : "flex-start")};

  @media screen and (max-width: 700px) {
    flex-direction: column;
    width: 95vw;
  }
`;
