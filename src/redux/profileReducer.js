const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inisialState = {
  postsData: [
    { id: 1, post: 'Hi! How are you?', like: 3 },
    { id: 2, post: 'It is my first post', like: 2 },
    { id: 3, post: 'Ha-ha-ha', like: 10 }
  ],
  newPostText: ''
};

const profileReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let posts = state.postsData;
      let newPost = {
        id: posts[posts.length - 1].id + 1,
        post: state.newPostText,
        like: 0
      }
      let stateCopy = { ...state };
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;