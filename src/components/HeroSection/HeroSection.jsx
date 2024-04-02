import {
  Hero,
  HeroContainer,
  HeroTitle,
  PageTitle,
  StyledLink,
} from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <Hero>
      <PageTitle>Welcome to our car agency</PageTitle>
      <HeroContainer>
        <HeroTitle>
          We provide a wide selection of cars for rent. Find the perfect car for
          your travel or business trip
        </HeroTitle>
        <StyledLink to="/catalog">Let's go</StyledLink>
      </HeroContainer>
    </Hero>
  );
};
