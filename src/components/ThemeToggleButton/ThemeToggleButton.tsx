import React from 'react';
import './ThemeToggleButton.scss'

interface ThemeToggleButtonProps {
  toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isThemeDark: boolean;
}

const ThemeToggleButton = ({ toggle, isThemeDark }: ThemeToggleButtonProps) => (
  <button className={`theme-toggle theme-toggle--state-${isThemeDark ? 'dark' : 'light'}`} onClick={toggle}>
    <div className="theme-toggle-button"></div>
    <span className="theme-toggle-text">{isThemeDark ? 'Night' : "Day"}</span>
  </button>
)

export default ThemeToggleButton