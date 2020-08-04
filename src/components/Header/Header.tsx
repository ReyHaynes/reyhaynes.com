import React from 'react'
import './Header.scss'
import Typewriter from 'typewriter-effect'

interface HeaderProps {
  name: string;
  subheading: string[];
}

const Header = ({ name, subheading }: HeaderProps) => (
  <div className="header">
    <h1>{ name }</h1>
    <h2>
      <Typewriter
        options={{
          strings: subheading,
          autoStart: true,
          loop: true
        }}
      />
    </h2>
  </div>
)

export default Header