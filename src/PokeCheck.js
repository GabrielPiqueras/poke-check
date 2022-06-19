import React from 'react';
import { useState } from "react";

// For themes
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dark, light } from './data/themes';

// Importo contexto 
import { ThemeContext } from './context/ThemeContext';

// Router
import { AppRouter } from './routers/AppRouter';

// CSS
import './css/styles.css';

const PokeCheck = () => {
    
    // The light theme is used by default
    const darkIsEnabled = JSON.parse(localStorage.getItem('isDarkTheme'));
    const [ isDarkTheme, setIsDarkTheme ] = useState(darkIsEnabled || false);
    
    return (
      <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
          <AppRouter />     
        </ThemeProvider>
      </ThemeContext.Provider>
    )
}

export default PokeCheck;