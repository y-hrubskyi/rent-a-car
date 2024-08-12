import styled from 'styled-components';

import HeartSVG from '~/assets/icons/heart.svg?react';
import CarPlaceholder from '~/assets/img/placeholders/car.webp';

export const Card = styled.li`
  width: 274px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 268px;
  margin-bottom: ${p => p.theme.spacing(7)};

  background-color: #f3f3f2;
  border-radius: ${p => p.theme.radii.img};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      180deg,
      ${p => p.theme.colors.dark(0.5)} 2.5%,
      ${p => p.theme.colors.dark(0)} 41.07%
    );
    z-index: 1;
  }
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  padding: 0;

  background-color: transparent;
  border: none;
  z-index: 1;
`;

export const HeartIcon = styled(HeartSVG)`
  width: 18px;
  height: 18px;

  stroke: ${p =>
    p['data-is-favorite'] ? p.theme.colors.accent : 'rgba(255, 255, 255, 0.8)'};
  fill: ${p => (p['data-is-favorite'] ? p.theme.colors.accent : 'none')};

  transition: ${p => p.theme.transition('stroke')},
    ${p => p.theme.transition('fill')};
`;

export const Img = styled.img`
  position: relative;
  object-fit: cover;

  &::after {
    content: '';
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
  margin-bottom: ${p => p.theme.spacing(14)};
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const AboutCar = styled.p`
  max-width: 80%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${p => p.theme.colors.dark()};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const AccentText = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${p => p.theme.spacing(2)};
  column-gap: ${p => p.theme.spacing(6)};
  max-height: 44px;
  overflow: hidden;
`;

export const DetailsItem = styled.li`
  position: relative;

  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 2px;
    right: -7px;
    width: 1px;
    height: 16px;

    background: ${p => p.theme.colors.dark(0.1)};
    z-index: 1;
  }
`;

export const Detail = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${p => p.theme.colors.dark(0.5)};
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;
  color: ${p => p.theme.colors.white};

  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.btn};
  border: none;

  transition: ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }
`;
