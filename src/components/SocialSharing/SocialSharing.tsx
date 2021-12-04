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
            analytics.logEvent('select_content', {
              content_type: 'social',
              item_id: social
            })
          }} 
          // eslint-disable-next-line
          target="_blank" rel="noopener noreferrer"> </a>
      )}
    </div>
  </div>
)

export default SocialSharing