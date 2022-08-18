const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let inisialState = {
  postsData: [
    { id: 1, post: 'Hi! How are you?', like: 3 },
    { id: 2, post: 'It is my first post', like: 2 },
    { id: 3, post: 'Ha-ha-ha', like: 10 }
  ],
  newPostText: '',
  profile: null
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
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state;
  }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;