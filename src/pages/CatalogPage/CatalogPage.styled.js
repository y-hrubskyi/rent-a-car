import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  display: flex;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
  color: ${(p) => p.theme.colors.accent};

  background-color: transparent;
  border: none;

  transition: ${(p) => p.theme.transition("color")};

  &:hover {
    color: ${(p) => p.theme.colors.hover};
  }
`;
