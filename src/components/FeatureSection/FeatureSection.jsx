import * as SC from "./FeatureSection.styled";

export const FeatureSection = () => {
  return (
    <section>
      <SC.SectionTitle>Our capabilities</SC.SectionTitle>
      <SC.FeatureListTitle>Take advantage of our service:</SC.FeatureListTitle>
      <SC.FeatureList>
        <SC.FeatureItem>
          <b>Choose</b> from a variety of car models, including comfortable
          sedans, station wagons and SUVs.
        </SC.FeatureItem>
        <SC.FeatureItem>
          <b>Filter</b> ads by model, rental price to find the perfect option
          for you.
        </SC.FeatureItem>
        <SC.FeatureItem>
          <b>Add</b> your favorite listings to your favorites for quick access.
        </SC.FeatureItem>
      </SC.FeatureList>
    </section>
  );
};
