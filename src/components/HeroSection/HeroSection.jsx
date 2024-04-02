import * as SC from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <SC.Hero>
      <SC.PageTitle>Welcome to our car agency</SC.PageTitle>
      <SC.HeroContainer>
        <SC.HeroTitle>
          We provide a wide selection of cars for rent. Find the perfect car for
          your travel or business trip
        </SC.HeroTitle>
        <SC.StyledLink to="/catalog">Ride On!</SC.StyledLink>
      </SC.HeroContainer>
    </SC.Hero>
  );
};
