import React from 'react';
import './ThemeToggleButton.scss'

interface ThemeToggleButtonProps {
  toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isThemeDark: boolean;
}

const ThemeToggleButton = ({ toggle, isThemeDark }: ThemeToggleButtonProps) => (
  <button className="button--theme-toggle" onClick={toggle}>
    <div className="toggle"></div>
    <span>{isThemeDark ? 'Night' : "Day"}</span>
  </button>
)

export default ThemeToggleButton