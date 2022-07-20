import React from 'react';
import { Post } from './Post/Post';

export const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea row='5'></textarea>
        <button>Create post</button>
      </div>

      <Post message='Hi! How are you?' like='3' />
      <Post message='It is my first post' like='10' />
      <Post message='Ha-ha-ha' like='2' />
    </div>
  )
}
