import React from 'react'
import './SocialSharing.scss'

interface SocialSharingProps {
  socials: Array<SocialProps>;
  theme: string;
}

interface SocialProps {
  social: string;
  target: string;
}

const SocialSharing = ({ socials, theme } : SocialSharingProps) => (
  <div className={`social--theme-${theme}`}>
    <div className="social-container">
      { socials.map(({ social, target }, index) => 
        // eslint-disable-next-line
        <a href={target} key={index} className={'social-icon ' + social} target="_blank" rel="noopener"> </a>
      )}
    </div>
  </div>
)

export default SocialSharing