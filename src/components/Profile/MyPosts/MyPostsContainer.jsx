import { addPost, updateNewPostText } from '../../../redux/profileReducer';
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
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPost());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostText(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
