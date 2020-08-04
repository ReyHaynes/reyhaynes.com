import React from 'react'
import './Header.scss'

interface HeaderProps {
  name: string;
  subheading: string[];
}

const Header = ({ name, subheading }: HeaderProps) => (
  <div className="header">
    <h1>{ name }</h1>
    <h2>{ subheading[0] }</h2>
  </div>
)

export default Header