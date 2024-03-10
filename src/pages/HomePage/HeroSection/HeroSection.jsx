import {
  Hero,
  HeroContainer,
  HeroImgBg,
  HeroWrapper,
  PageTitle,
  StyledLink,
} from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <Hero>
      <PageTitle>Welcome to our car agency</PageTitle>
      <HeroContainer>
        <HeroImgBg />
        <HeroWrapper>
          <h2>
            We provide a wide selection of cars for rent. Find the perfect car
            for your travel or business trip
          </h2>
          <StyledLink to="/catalog">Let's go</StyledLink>
        </HeroWrapper>
      </HeroContainer>
    </Hero>
  );
};
