import styled, { css } from 'styled-components';

const subColor = '#777';
const mainColor = '#333';

const shrinkLabelStyles = css`
  top: -1.4rem;
  font-size: 1.2rem;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 1rem;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.6rem;
  padding: 1rem 1rem 1rem 5rem;
  display: block;
  width: 32rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 2.5rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 3.5rem 0;

  .form-input {
    input[type='password'] {
      letter-spacing: 0.3em;
    }
  }
`;
