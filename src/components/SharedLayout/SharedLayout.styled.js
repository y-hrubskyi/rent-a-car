import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  padding-right: ${(p) => p.theme.spacing(10)};
  padding-left: ${(p) => p.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    padding-right: ${(p) => p.theme.spacing(30)};
    padding-left: ${(p) => p.theme.spacing(30)};
  }

  @media screen and (min-width: 1440px) {
    padding-right: ${(p) => p.theme.spacing(64)};
    padding-left: ${(p) => p.theme.spacing(64)};
  }
`;

export const Main = styled.main`
  padding-top: ${(p) => p.theme.spacing(20)};
  padding-bottom: ${(p) => p.theme.spacing(50)};
`;
