import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: ${p => p.theme.spacing(25)};
  column-gap: ${p => p.theme.spacing(14.5)};
`;
