import styled from "styled-components";
import CrossSVG from "@/assets/icons/cross.svg?react";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: ${(p) => p.theme.colors.dark(0.5)};
  overflow: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 541px;
  max-height: 90%;
  padding: ${(p) => p.theme.spacing(20)};

  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.modal};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 14px;
    margin-bottom: 14px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(p) => p.theme.colors.dark(0.2)};
  }

  @media screen and (max-width: 767px) {
    & {
      width: 70%;
      min-width: 320px;
      padding: ${(p) => p.theme.spacing(14)};
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;

  width: 24px;
  height: 24px;
  padding: 0;

  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.hover};
  }

  @media screen and (max-width: 767px) {
    & {
      top: 12px;
      right: 12px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const CrossIcon = styled(CrossSVG)`
  width: 24px;
  height: 24px;

  stroke: currentColor;

  transition: ${(p) => p.theme.transition("color")};

  @media screen and (max-width: 767px) {
    & {
      width: 20px;
      height: 20px;
    }
  }
`;
