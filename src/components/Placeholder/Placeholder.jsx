import { PlaceholderText, PlaceholderWrapper } from './Placeholder.styled';

export const Placeholder = ({ children }) => {
  return (
    <PlaceholderWrapper>
      <PlaceholderText>{children}</PlaceholderText>
    </PlaceholderWrapper>
  );
};
