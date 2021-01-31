import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import * as themes from '../themes';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const localTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = useState(themes[localTheme] || themes.defaultTheme);

  const updateTheme = (e) => {
    const themeName = e.target.value;
    window.localStorage.setItem('theme', themeName);
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ themeName: theme.name, updateTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
