import React from "react";
import styled from "styled-components";

import { Card } from "./Card";

export const About = ({ about }) => {
  return (
    <Card wide>
      <Header>About Me</Header>
      <List>
        {about.map((a) => (
          <Li key={a.name}>
            <strong>{a.name}:</strong> {a.value}
          </Li>
        ))}
      </List>
    </Card>
  );
};

const Header = styled.h2`
  padding: 0 0 10px 0;
  margin: 0;
  font-size: 24px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
  margin: 0;
`;

const Li = styled.li`
  padding: 4px 0;
`;
