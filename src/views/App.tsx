import React, { useState } from 'react'
import './App.scss'
import { ThemeToggleButton } from '../components'

const App = () => {
  const themeLocalStorage:boolean = localStorage.getItem('DarkMode') === 'true'

  const [isThemeDark, setIsThemeDark] = useState<boolean>(themeLocalStorage)

  const toggleTheme = () => {
    localStorage.setItem('DarkMode', String(!isThemeDark))
    setIsThemeDark(!isThemeDark)
  }

  return (
    <div className={'app ' + (isThemeDark ? 'app--theme-dark': 'app--theme-light')}>
      <div className='background--theme-light'></div>
      <div className='background--theme-dark'></div>
      <ThemeToggleButton toggle={toggleTheme} isThemeDark={isThemeDark} />
    </div>
  );
}

export default App
