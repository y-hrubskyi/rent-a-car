import styled from "styled-components";

import CarPlaceholder from "@/assets/img/car-placeholder.jpg";

export const ImgWrapper = styled.div`
  width: 100%;
  height: 248px;
  margin-bottom: ${(p) => p.theme.spacing(7)};

  background-color: #f3f3f2;
  border-radius: ${(p) => p.theme.radii.img};
  overflow: hidden;
`;

export const Img = styled.img`
  position: relative;
  object-fit: cover;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${CarPlaceholder});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(12)};
  margin-bottom: ${(p) => p.theme.spacing(12)};
`;

export const AboutCar = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(4)};

  font-size: 18px;
  font-weight: 500;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.dark()};
`;

export const AccentText = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${(p) => p.theme.spacing(2)};
  column-gap: ${(p) => p.theme.spacing(6)};
  margin-bottom: ${(p) => p.theme.spacing(7)};
`;

export const DetailsItem = styled.li`
  position: relative;

  &:not(:last-child):after {
    content: "";
    position: absolute;
    top: 2px;
    right: -7px;
    width: 1px;
    height: 16px;

    background: ${(p) => p.theme.colors.dark(0.1)};
    z-index: 1;
  }
`;

export const Detail = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.dark(0.5)};
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.dark()};
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${(p) => p.theme.spacing(2)};
  column-gap: ${(p) => p.theme.spacing(6)};
`;

export const CardInfoSectionTitle = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(4)};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.dark()};
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(4)};
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
`;

export const Condition = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
`;

export const AccentCondition = styled.span`
  font-weight: 600;
  color: ${(p) => p.theme.colors.accent};
`;

export const RentalCarBtn = styled.a`
  display: block;
  width: 168px;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;
  text-align: center;
  color: ${(p) => p.theme.colors.white};

  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.btn};
  text-decoration: none;

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
