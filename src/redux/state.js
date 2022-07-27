let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, post: 'Hi! How are you?', like: 3 },
        { id: 2, post: 'It is my first post', like: 2 },
        { id: 3, post: 'Ha-ha-ha', like: 10 }
      ],
      newPostText: ''
    },
    chatPage: {
      dialogsData: [
        { id: 1, name: 'Marina', avatar: 'https://i.yapx.cc/Ra8I0.jpg', email: 'zags1@gmail.com' },
        { id: 2, name: 'Sveta', avatar: 'https://i.yapx.cc/Ra8I4.jpg', email: 'zags2@gmail.com' },
        { id: 3, name: 'Aigul', avatar: 'https://i.yapx.cc/Ra8JA.jpg', email: 'zags3@gmail.com' },
        { id: 4, name: 'Katia', avatar: 'https://i.yapx.cc/Ra8JB.jpg', email: 'zags4@gmail.com' },
        { id: 5, name: 'Albina', avatar: 'https://i.yapx.cc/Ra8JI.jpg', email: 'zags5@gmail.com' }
      ],
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hello' },
        { id: 4, message: 'Ku-ku' }
      ],
      newMessageText: ''
    },
    users: [
      { id: 1, name: 'Marina', avatar: 'https://i.yapx.cc/Ra8I0.jpg', email: 'zags1@gmail.com' },
      { id: 2, name: 'Sveta', avatar: 'https://i.yapx.cc/Ra8I4.jpg', email: 'zags2@gmail.com' },
      { id: 3, name: 'Aigul', avatar: 'https://i.yapx.cc/Ra8JA.jpg', email: 'zags3@gmail.com' },
      { id: 4, name: 'Katia', avatar: 'https://i.yapx.cc/Ra8JB.jpg', email: 'zags4@gmail.com' },
      { id: 5, name: 'Albina', avatar: 'https://i.yapx.cc/Ra8JI.jpg', email: 'zags5@gmail.com' }
    ]
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },

  addPost() {
    let posts = this._state.profilePage.postsData;
    let newPost = {
      id: posts[posts.length - 1].id + 1,
      post: this._state.profilePage.newPostText,
      like: 0
    }
    posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  addMessage() {
    let messages = this._state.chatPage.messagesData;
    let newMessage = {
      id: messages[messages.length - 1].id + 1,
      message: this._state.chatPage.newMessageText
    }
    messages.push(newMessage);
    this._state.chatPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.chatPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

window.store = store;

export default store;