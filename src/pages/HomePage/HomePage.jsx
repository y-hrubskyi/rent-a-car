import { HeroSection } from "./HeroSection/HeroSection";
import { FeatureSection } from "./FeatureSection/FeatureSection";
import { PageTitle } from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <PageTitle>Welcome to our car agency</PageTitle>
      <HeroSection />
      <FeatureSection />
    </>
  );
};

export default HomePage;
