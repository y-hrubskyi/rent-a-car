import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>SharedLayout</div>
      <Outlet />
    </>
  );
};
