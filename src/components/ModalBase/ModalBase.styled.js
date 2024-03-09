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
  padding: ${(p) => p.theme.spacing(20)};

  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.modal};
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
`;

export const CrossIcon = styled(CrossSVG)`
  width: 24px;
  height: 24px;

  stroke: ${(p) => p.theme.colors.dark()};
`;
