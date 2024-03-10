import styled from "styled-components";
import { Link } from "react-router-dom";

import HeroImg from "@/assets/img/hero.webp";

export const Hero = styled.section`
  margin-bottom: ${(p) => p.theme.spacing(20)};
`;

export const PageTitle = styled.h1`
  margin-bottom: ${(p) => p.theme.spacing(10)};
  text-align: center;
  font-size: 2em;
`;

export const HeroContainer = styled.div`
  display: flex;
`;

export const HeroImgBg = styled.div`
  height: 220px;
  display: inline-flex;
  margin-right: ${(p) => p.theme.spacing(20)};

  width: 120%;
  background: url(${HeroImg});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: ${(p) => p.theme.radii.img};
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin-right: 28%;

  font-weight: 600;
  text-align: center;
  color: ${(p) => p.theme.colors.white};

  text-decoration: none;
  border-radius: ${(p) => p.theme.radii.btn};
  background-color: ${(p) => p.theme.colors.accent};

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
