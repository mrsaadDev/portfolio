import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaGithub, FaEnvelope } from "react-icons/fa";

import { Card } from "./Card";

export const User = () => {
  return (
    <Card wide row user>
      <InfoWrapper>
        
        <Info>
          <Name>Saadulloh</Name>
          <Professioon>Python Developer</Professioon>
        </Info>
      </InfoWrapper>
      <List>
        <Link target="_blank" href="https://t.me/saadulloh_mv">
          <FaTelegramPlane size={30} />
        </Link>
        <Link target="_blank" href="https://github.com/mrsaaddev">
          <FaGithub size={30} />
        </Link>
        <Link target="_blank" href="mailto:mrsaadsmm@gmail.com">
          <FaEnvelope size={30} />
        </Link>
      </List>
    </Card>
  );
};

const InfoWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-size: 24px;
`;

const Professioon = styled.div`
  padding-top: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #ccc;
  @media screen and (max-width: 700px) {
    padding: 10px 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Link = styled.a`
  width: 40px;
  height: 40px;
  margin-left: 30px;
  border-radius: 100%;
  transition: 0.1s ease;
  color: #ced1e0;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #a8a9ad;
  }
`;
