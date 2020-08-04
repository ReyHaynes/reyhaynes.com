import React, { useState } from 'react'
import './App.scss'
import { SocialSharing, ThemeToggleButton } from '../components'
import content from '../assets/content.json'

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
      <div className="menu">
        <ThemeToggleButton toggle={toggleTheme} isThemeDark={ isThemeDark } />
      </div>
      <div className="container">
        <div className="content">
          <header className="content-header">
            <h1>{ content.name }</h1>
            <h2>{ content.subheading[0] }</h2>
          </header>
          <div className="content-social">
            <SocialSharing theme="light" socials={ content.socials as [] }/>
            <SocialSharing theme="dark" socials={ content.socials as [] }/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
