import {
  FeatureItem,
  FeatureList,
  FeatureListTitle,
  SectionTitle,
} from "./FeatureSection.styled";

export const FeatureSection = () => {
  return (
    <section>
      <SectionTitle>Our capabilities</SectionTitle>
      <FeatureListTitle>Take advantage of our service:</FeatureListTitle>
      <FeatureList>
        <FeatureItem>
          <b>Choose</b> from a variety of car models, including comfortable
          sedans, station wagons and SUVs.
        </FeatureItem>
        <FeatureItem>
          <b>Filter</b> ads by model, rental price to find the perfect option
          for you.
        </FeatureItem>
        <FeatureItem>
          <b>Add</b> your favorite listings to your favorites for quick access.
        </FeatureItem>
      </FeatureList>
    </section>
  );
};
