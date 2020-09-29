import React from 'react'
import './SocialSharing.scss'
import { FirebaseAnalytics as analytics } from '../../firebase'


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
        <a href={target} key={index} className={'social-icon ' + social}
          onClick={() => { 
            analytics.logEvent('social_click', {
              social_target: social
            })
          }} 
          // eslint-disable-next-line
          target="_blank" rel="noopener"> </a>
      )}
    </div>
  </div>
)

export default SocialSharing