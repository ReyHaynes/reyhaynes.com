import React, { useState } from 'react'
import './App.scss'
import { ThemeToggleButton } from '../components'

const App = () => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false)

  const toggleTheme = () => setIsThemeDark(!isThemeDark)

  return (
    <div className={isThemeDark ? 'app app--theme-dark': 'app app--theme-light'}>
      <ThemeToggleButton toggle={toggleTheme} isThemeDark={isThemeDark} />
    </div>
  );
}

export default App
