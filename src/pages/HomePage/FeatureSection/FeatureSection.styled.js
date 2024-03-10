import styled from "styled-components";

export const SectionTitle = styled.h2`
  margin-bottom: ${(p) => p.theme.spacing(10)};
  text-align: center;
`;

export const FeatureListTitle = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(10)};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(p) => p.theme.colors.dark()};
`;

export const FeatureList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: disc;
`;

export const FeatureItem = styled.li`
  max-width: 25%;

  font-size: 18px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.dark()};
`;
