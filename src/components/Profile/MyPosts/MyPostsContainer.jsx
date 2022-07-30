import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { MyPosts } from './MyPosts';

/* const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }
  return (
    <MyPosts
      newPostText={state.newPostText}
      postsData={state.postsData}
      onAddPost={onAddPost}
      onPostChange={onPostChange} />
  )
} */

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.postsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
