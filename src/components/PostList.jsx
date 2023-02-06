import React from "react";
import Post from "./Post.jsx";

const mainPostList = [
  {
    name: 'David',
    post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam, voluptatem, error placeat vitae odit explicabo praesentium officia sequi assumenda libero officiis ipsum natus. Sit dolorem ratione rerum laboriosam eius.'
  },
  {
    name: 'Brandon',
    post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam, voluptatem, error placeat vitae odit explicabo praesentium officia sequi assumenda libero officiis ipsum natus. Sit dolorem ratione rerum laboriosam eius.'
  },
  {
    name: 'Chris',
    post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam, voluptatem, error placeat vitae odit explicabo praesentium officia sequi assumenda libero officiis ipsum natus. Sit dolorem ratione rerum laboriosam eius.'
  },
  {
    name: 'Robert',
    post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam, voluptatem, error placeat vitae odit explicabo praesentium officia sequi assumenda libero officiis ipsum natus. Sit dolorem ratione rerum laboriosam eius.'
  },
  {
    name: 'Yoonis',
    post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam, voluptatem, error placeat vitae odit explicabo praesentium officia sequi assumenda libero officiis ipsum natus. Sit dolorem ratione rerum laboriosam eius.'
  },
  {
    name: 'Lucas',
    post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam, voluptatem, error placeat vitae odit explicabo praesentium officia sequi assumenda libero officiis ipsum natus. Sit dolorem ratione rerum laboriosam eius.'
  }
];

function PostList(){
  return (
    <div className="post-list">
      <form className="post">
        <textarea className="post-input" id="post"></textarea>
        <button className="post-button" type="submit">Post</button>
      </form>
      <hr />
        {mainPostList.map((post, index) =>
          <Post 
            name={post.name}
            post={post.post}
            index={post.index} />
        )}
    </div>
  );
}

export default PostList;