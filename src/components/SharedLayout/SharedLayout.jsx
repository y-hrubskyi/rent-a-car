import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites"> Favorites</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};