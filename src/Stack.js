import React from "react";
import styled from "styled-components";

import { Card } from "./Card";

export const Stack = ({ stack }) => {
  return (
    <Card>
      <NameWrapper>
        <Count>{stack.length}</Count>
        <Name>Stack</Name>
      </NameWrapper>
      <TagsWrapper>
        {stack.map((a) => (
          <Tag key={a}>{a}</Tag>
        ))}
      </TagsWrapper>
    </Card>
  );
};

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Count = styled.div`
  color: white;
  padding: 4px 14px;
  background: #ced1e0;
  border-radius: 20px;
`;

const Name = styled.h2`
  font-size: 24px;
  padding: 0;
  padding-left: 10px;
  margin: 0;
`;

const TagsWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  color: white;
  font-weight: 500;
  background: #538bff;
  border-radius: 20px;
  padding: 8px 20px;
  margin: 0 10px 10px 0;
  transition: 0.2s ease;
  font-weight: 400;

  &:hover {
    background: #2f73ff;
    cursor: pointer;
  }
`;
