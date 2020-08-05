import React, { useState } from 'react'
import './App.scss'
import { Header, Posts, SocialSharing, Theme, ThemeToggleButton } from '../components'
import content from '../assets/content.json'

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
      {/* <div className="app--theme-light">
        <div className="app-background">
          <div className="app-container">
            <div className="app-background-image-container"></div>
          </div>
        </div>
        <div className="app-container">

        </div>
      </div> */}
    </div>

    // <div className={'app ' + (isThemeDark ? 'app--theme-dark': 'app--theme-light')}>
    //   <div className="app-background">
    //     <div className="background--theme-light">
    //       <div className='background-container'>
    //         <div className="background-image"></div>
    //       </div>
    //     </div>
    //     <div className="background--theme-dark">
    //       <div className='background-container'>
    //         <div className="background-image"></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="app-menu">
    //     <ThemeToggleButton toggle={ toggleTheme } isThemeDark={ isThemeDark } />
    //   </div>
    //   <div className="app-container">
    //     <div className="app-content">
    //       <header className="app-content-header">
    //         <Header name={ content.name } subheading={ content.subheading as [] } />
    //       </header>
    //       <div className="app-content-social">
    //         <SocialSharing theme="light" socials={ content.socials as [] } />
    //         <SocialSharing theme="dark" socials={ content.socials as [] } />
    //       </div>
    //       <div className="app-background-mobile">
    //         <div className='background--theme-light'>
    //           <div className="background-takeover"></div>
    //           <div className="background-image"></div>
    //         </div>
    //         <div className='background--theme-dark'>
    //           <div className="background-takeover"></div>
    //           <div className="background-image"></div>
    //         </div>
    //       </div>
    //       <div className="app-content-posts">
    //         <Posts theme="light" posts={ content.posts as [] } />
    //         <Posts theme="dark" posts={ content.posts as [] } />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App
