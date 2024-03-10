import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding-right: ${(p) => p.theme.spacing(64)};
  padding-left: ${(p) => p.theme.spacing(64)};
`;

export const Main = styled.main`
  padding-top: ${(p) => p.theme.spacing(35)};
  padding-bottom: ${(p) => p.theme.spacing(75)};
`;
