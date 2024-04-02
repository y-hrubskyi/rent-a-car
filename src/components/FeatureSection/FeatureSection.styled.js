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
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    & {
      justify-content: space-around;
      flex-direction: row;
      align-items: flex-start;
      gap: 0;
    }
  }
`;

export const FeatureItem = styled.li`
  max-width: 400px;

  font-size: 18px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.dark()};

  @media screen and (min-width: 768px) {
    & {
      max-width: 25%;
    }
  }
`;
