import { NavItem, NavList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/favorites"> Favorites</StyledLink>
        </NavItem>
      </NavList>
    </nav>
  );
};
