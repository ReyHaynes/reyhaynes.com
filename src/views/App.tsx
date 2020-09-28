import React, { useState, useEffect } from 'react'
import './App.scss'
import staticContent from '../assets/content.json'
import { ThemeToggleButton } from '../components'
import Theme from './Theme/Theme'
import { FirebaseDB as db } from '../firebase'

const App = () => {
  const themeLocalStorage:boolean = localStorage.getItem('DarkMode') === 'true'

  const [isThemeDark, setIsThemeDark] = useState<boolean>(themeLocalStorage)
  const [content, setContent] = useState(staticContent)

  const toggleTheme = () => {
    localStorage.setItem('DarkMode', String(!isThemeDark))
    setIsThemeDark(!isThemeDark)
  }

  interface Posts {
    social: string;
    target: string;
    info: string;
  }

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsRef = db.doc('posts/_public_')
        const { posts } = (await postsRef.get()).data() || { posts: [] }
        
        setContent(data => ({
          ...data,
          posts: posts.filter((p:Posts) => p.social !== undefined && p.target !== undefined && p.info !== undefined)
        }))
      } catch (error) {
        console.log(error)
      }
    }

    getPosts()
  }, [])

  return (
    <div className="app">
      <div className="app-theme-toggle-container">
        <div className="app-theme-toggle">
          <ThemeToggleButton toggle={ toggleTheme } isThemeDark={ isThemeDark } />
        </div>
      </div>
      <div className={`app-themes app--theme-${ isThemeDark ? 'dark': 'light' }`}>
        <Theme theme="light" content={ content } />
        <Theme theme="dark"  content={ content } />
      </div>
    </div>
  );
}

export default App
