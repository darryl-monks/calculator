import { ThemeTypes } from '../../types/types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const DEFAULT_THEME = 'light';

const ThemeContainer = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const ThemeToggle = styled.label`
  width: 48px;
  text-align: center;
  display: flex;
`;

const ThemeCheckbox = styled.input`
  display: none;

  &:checked + .theme-slider {
    &:before {
      transform: translateX(24px);
    }
  }
`;

const ThemeSlider = styled.span`
  position: relative;
  border: 2px solid var(--theme-toggle-color);
  border-radius: 16px;
  cursor: pointer;
  width: 100%;
  height: 24px;

  &:before {
    content: '';
    width: 16px;
    height: 16px;
    background-color: var(--theme-toggle-color);
    border-radius: 100%;
    top: 2px;
    left: 2px;
    position: absolute;
  }
`;

const ThemeText = styled.label`
  color: var(--theme-toggle-color);
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Theme = () => {
  const [enableDarkMode, setEnableDarkMode] = useState<boolean>(false);

  const setTheme = () => {
    const activeTheme = (localStorage.getItem('theme') as ThemeTypes) || DEFAULT_THEME;
    updateTheme(activeTheme);
  };

  const updateTheme = (themeName: ThemeTypes) => {
    localStorage.setItem('theme', themeName);
    document.body.setAttribute('data-theme', themeName);

    if (themeName === 'dark') {
      setEnableDarkMode(true);
    } else {
      setEnableDarkMode(false);
    }
  };

  const handleThemeCheck = (event: React.ChangeEvent) => {
    const checkbox = event.currentTarget as HTMLInputElement;

    if (checkbox.checked) {
      updateTheme('dark');
    } else {
      updateTheme('light');
    }
  };

  useEffect(setTheme, []);

  return (
    <ThemeContainer>
      <ThemeText htmlFor="theme">{enableDarkMode ? 'Dark Mode' : 'Light Mode'}</ThemeText>
      <ThemeToggle>
        <ThemeCheckbox id="theme" type="checkbox" onChange={handleThemeCheck} checked={enableDarkMode} />
        <ThemeSlider className="theme-slider" />
      </ThemeToggle>
    </ThemeContainer>
  );
};

export default Theme;
