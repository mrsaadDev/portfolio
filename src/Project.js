import React from "react";
import styled from "styled-components";
import { FaGithub, FaPlay } from "react-icons/fa";

import { Card } from "./Card";

export const Project = ({ links, name, color, image, description, stack }) => {
  return (
    <Card project>
      <NameWrapper>
        <Name links={links}>{name}</Name>
        <List>
          {links.length > 1 ? (
            <React.Fragment>
              <Link target="_blank" href={links[0]}>
                <FaGithub size={20} />
              </Link>
              <Link target="_blank" href={links[1]}>
                <FaPlay size={20} />
              </Link>
            </React.Fragment>
          ) : (
            <InProgress>In progress</InProgress>
          )}
        </List>
      </NameWrapper>
      <ImageWrapper>
        <Image color={color} src={image}></Image>
        <DescriptionLink target="_blank" href={links[1]}>
          {description}
          <StackText>{stack}</StackText>
        </DescriptionLink>
      </ImageWrapper>
    </Card>
  );
};

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${(props) => (props.links ? "black" : "#bebfc4")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 250px;
  width: 100%;
  transition: 0.2s ease;
  border: 0;
  background: ${(props) => (props.image ? `url(${props.image})` : "orange")};
  &:hover {
    cursor: pointer;
  }
  &:hover + a,
  &:hover + span {
    display: block;
  }
`;

const DescriptionLink = styled.a`
  height: 250px;
  width: 100%;
  position: absolute;
  z-index: 2;
  color: white;
  top: 0;
  left: 0;
  background: transparent;
  transition: 0.2s ease;
  padding: 20px;
  box-sizing: border-box;
  color: transparent;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: white;
  }

  @media screen and (max-width: 700px) {
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
`;

const StackText = styled.span`
  font-weight: 500;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`;

const Link = styled.a`
  color: #ced1e0;
  margin-left: 15px;
  border-radius: 100%;
  transition: 0.1s ease;
  &:hover {
    color: #a8a9ad;
    cursor: pointer;
  }
`;

const InProgress = styled.span`
  color: #bebfc4;
  font-weight: bold;
  white-space: nowrap;
`;
