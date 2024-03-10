import { Hero, HeroImgBg, HeroWrapper, StyledLink } from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <Hero>
      <HeroImgBg />
      <HeroWrapper>
        <h2>
          We provide a wide selection of cars for rent. Find the perfect car for
          your travel or business trip
        </h2>
        <StyledLink to="/catalog">Let's go</StyledLink>
      </HeroWrapper>
    </Hero>
  );
};
