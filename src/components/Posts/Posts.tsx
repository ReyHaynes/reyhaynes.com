import React from 'react'
import './Posts.scss'
import { ga } from 'react-ga'

interface PostsProps {
  posts: Array<PostProps>;
  theme: string;
}

interface PostProps {
  social: string;
  target: string;
  info: string;
}

const Posts = ({ posts, theme } : PostsProps) => (
  <div className={`posts--theme-${theme}`}>
    <div className="posts-container">
      { posts.map(({ social, target, info }, index) =>
        <div className="posts-post" key={index}>
          <a href={target} className={'posts-icon ' + social}
            onClick={() => { ga('send', 'event', 'Posts', 'click', target) }}
            // eslint-disable-next-line
            target="_blank" rel="noopener"> </a>
          <a href={target} className="posts-info"
            onClick={() => { ga('send', 'event', 'Posts', 'click', target) }}
            // eslint-disable-next-line
            target="_blank" rel="noopener">
            <div className="post">{ info }</div>
          </a>
        </div>
      )}
    </div>
  </div>
)

export default Posts