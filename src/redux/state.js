const state = {
  profilePage: {
    postsData: [
      { id: 1, post: 'Hi! How are you?', like: 3 },
      { id: 2, post: 'It is my first post', like: 2 },
      { id: 3, post: 'Ha-ha-ha', like: 10 }
    ]
  },
  chatPage: {
    dialogsData: [
      { id: 1, name: 'Marina' },
      { id: 2, name: 'Sveta' },
      { id: 3, name: 'Aigul' },
      { id: 4, name: 'Katia' },
      { id: 5, name: 'Albina' }
    ],
    messagesData: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Hello' },
      { id: 4, message: 'Ku-ku' }
    ]
  }
}

export default state;