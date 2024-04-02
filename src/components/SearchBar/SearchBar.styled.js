import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(p) => p.theme.spacing(9)};
  margin-bottom: ${(p) => p.theme.spacing(25)};

  @media screen and (min-width: 768px) {
    & {
      flex-direction: row;
      align-items: flex-end;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(4)};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;
  text-align: center;
  color: ${(p) => p.theme.colors.grayForInputs()};

  @media screen and (min-width: 768px) {
    & {
      text-align: left;
    }
  }
`;

export const SubmitBtn = styled.button`
  padding: ${(p) => p.theme.spacing(7)} ${(p) => p.theme.spacing(22)};

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.white};

  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.btn};
  border: none;

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
