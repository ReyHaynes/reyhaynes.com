import React from 'react'
import './Theme.scss'

interface ThemeProps {
  theme: string;
}

const Theme = ({ theme } : ThemeProps) => (
  <div className={`theme--${theme}`}>
    <div className="theme-background">
      <div className="theme-container">
        <div className="theme-background-image-container"></div>
      </div>
    </div>
    <div className="theme-container">

    </div>
  </div>
)

export default Theme