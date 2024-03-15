import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Header } from "@/components/Header/Header";

import { Container, Main } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 1500 }} />

      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
