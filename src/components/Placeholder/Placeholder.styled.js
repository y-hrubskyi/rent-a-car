import styled from "styled-components";

import PlaceholderImg from "@/assets/img/empty-placeholder.png";

export const PlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 480px;
  background: url(${PlaceholderImg}) no-repeat center;
`;

export const PlaceholderText = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(p) => p.theme.colors.dark()};
`;
