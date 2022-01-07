import React from "react";
import { FirebaseInstance as firebase } from "../../firebase";
import "./Posts.scss";
interface PostsProps {
  posts: Array<PostProps>;
  theme: string;
}

interface PostProps {
  social: string;
  target: string;
  info: string;
}

const Posts = ({ posts, theme }: PostsProps) => (
  <div className={`posts--theme-${theme}`}>
    <div className="posts-container">
      {posts.map(({ social, target, info }, index) => (
        <div className="posts-post" key={index}>
          <a
            href={target}
            className={"posts-icon " + social}
            onClick={() => {
              firebase.logEvent("select_content", {
                content_type: "post",
                item_id: target,
                item_name: info,
              });
              // ga('send', 'event', 'Posts', 'click', target)
            }}
            // eslint-disable-next-line
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            href={target}
            className="posts-info"
            onClick={() => {
              firebase.logEvent("select_content", {
                content_type: "post",
                item_id: target,
                item_name: info,
              });
              // ga('send', 'event', 'Posts', 'click', target)
            }}
            // eslint-disable-next-line
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="post">{info}</div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Posts;
