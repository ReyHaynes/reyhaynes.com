import React from 'react';
import './ThemeToggleButton.scss'

type ThemeToggleButtonProps = {
  toggle: (event: React.MouseEvent<HTMLButtonElement>) => void,
  isThemeDark: boolean
}

const ThemeToggleButton = ({ toggle, isThemeDark }: ThemeToggleButtonProps) => (
    <button className="button--theme-toggle" onClick={toggle}>
      <div className="toggle"></div>
      <span>{isThemeDark ? 'Day' : "Night"}</span>
    </button>
)

export default ThemeToggleButton