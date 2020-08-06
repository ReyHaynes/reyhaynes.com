import React, { useState } from 'react'
import './App.scss'
import { ThemeToggleButton } from '../components'
import Theme from './Theme/Theme'

const App = () => {
  const themeLocalStorage:boolean = localStorage.getItem('DarkMode') === 'true'

  const [isThemeDark, setIsThemeDark] = useState<boolean>(themeLocalStorage)

  const toggleTheme = () => {
    localStorage.setItem('DarkMode', String(!isThemeDark))
    setIsThemeDark(!isThemeDark)
  }

  return (
    <div className="app">
      <div className="app-theme-toggle-container">
        <div className="app-theme-toggle">
          <ThemeToggleButton toggle={ toggleTheme } isThemeDark={ isThemeDark } />
        </div>
      </div>
      <div className={`app-themes app--theme-${ isThemeDark ? 'dark': 'light' }`}>
        <Theme theme="light" />
        <Theme theme="dark" />
      </div>
    </div>
  );
}

export default App
