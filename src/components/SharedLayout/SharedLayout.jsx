import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Header } from "@/components/Header/Header";

import { Container, Main } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <GlobalStyle />

      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
