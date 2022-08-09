import React from 'react';
import styled from 'styled-components';
import { CalculatorActions } from '../../types/types';

interface Props {
  children: React.ReactNode;
  action: CalculatorActions;
  value?: string;
  theme?: string;
  columnSpan?: number;
  ariaLabel?: string;
  handleOnClick: (event: React.MouseEvent) => void;
}

interface StyledButtonProps {
  theme?: string;
  columnSpan?: number;
}

const defaultProps = {
  theme: 'default',
  columnSpan: 1,
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => handleBackgroundColor(props.theme)};
  border-radius: 0.25rem;
  border: none;
  color: ${(props) => handleTextColor(props.theme)};
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  grid-column: span ${(props) => props.columnSpan};
  line-height: inherit;
  padding: 1rem 0;
  text-transform: uppercase;

  &:hover {
    filter: brightness(90%);
  }
`;

const handleBackgroundColor = (theme: string) => `var(--${theme}-button-bg-color)`;

const handleTextColor = (theme: string) => `var(--${theme}-button-text-color)`;

function Button(props: Props) {
  const { children, action, value, theme, columnSpan, ariaLabel, handleOnClick } = props;

  return (
    <StyledButton
      data-action={action}
      data-value={value}
      theme={theme}
      columnSpan={columnSpan}
      aria-label={ariaLabel}
      onClick={handleOnClick}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = defaultProps;

export default Button;
