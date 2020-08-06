import React from 'react'
import './Theme.scss'
import { Header, Posts, SocialSharing } from '../../components'
import content from '../../assets/content.json'

interface ThemeProps {
  theme: string;
}

const Theme = ({ theme } : ThemeProps) => (
  <div className={`theme--${ theme }`}>
    <div className="theme-background">
      <div className="theme-container">
        <div className="theme-background-image-container"></div>
      </div>
    </div>
    <div className="theme-container theme-content">
      <div className="theme-content-container">
        <header className="theme-content-header">
          <Header name={ content.name } subheading={ content.subheading as [] } />
        </header>
        <div className="theme-content-social">
          <SocialSharing theme={ theme } socials={ content.socials as [] } />
        </div>
        <div className="theme-content-mobile">
          <div className="theme-content-mobile-image-container"></div>
        </div>
        <div className="theme-content-posts">
          <Posts theme={ theme } posts={ content.posts as [] } />
        </div>
        <div className="theme-content-footer">
          <div className="theme-content-footer-info">
            <a href="https://github.com/reyhaynes"
              // eslint-disable-next-line
              target="_blank" rel="noopener">One Page Theme Switcher</a> by&nbsp;
            <a href="https://reyhaynes.com"
              // eslint-disable-next-line
              target="_blank" rel="noopener">@REYHAYNES</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Theme