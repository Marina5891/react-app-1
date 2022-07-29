import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const createNewPost = () => {
        props.store.dispatch(addPostActionCreator());
      }
    
    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
  return (
    <MyPosts />
  )
}

export default MyPostsContainer;
