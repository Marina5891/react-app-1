const SHOW_USERS = 'SHOW-USERS';

let inisialState = {
    users: [
        { id: 1, name: 'Marina', avatar: 'https://i.yapx.cc/Ra8I0.jpg', email: 'zags1@gmail.com' },
        { id: 2, name: 'Sveta', avatar: 'https://i.yapx.cc/Ra8I4.jpg', email: 'zags2@gmail.com' },
        { id: 3, name: 'Aigul', avatar: 'https://i.yapx.cc/Ra8JA.jpg', email: 'zags3@gmail.com' },
        { id: 4, name: 'Katia', avatar: 'https://i.yapx.cc/Ra8JB.jpg', email: 'zags4@gmail.com' },
        { id: 5, name: 'Albina', avatar: 'https://i.yapx.cc/Ra8JI.jpg', email: 'zags5@gmail.com' }
    ]
};

const sidebarReducer = (state = inisialState, action) => {
    return state;
}

export default sidebarReducer;