import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(6)};
`;

export const NavItem = styled.li`
  width: 120px;
  height: 40px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  font-weight: 600;
  text-align: center;
  color: ${(p) => p.theme.colors.black};
  text-decoration: none;
  border-radius: ${(p) => p.theme.radii.btn};

  &.active {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.accent};
  }
`;
