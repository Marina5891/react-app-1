
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/state';
//import state, { addPost, addMessage, updateNewPostText, updateNewMessageText, subscribe } from './redux/state';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (store) => {
  root.render(
      <React.StrictMode>
          <BrowserRouter>
              <App
                  store={store}
                  /*state={state}
                   addPost={addPost}
                  addMessage={addMessage}
                  updateNewMessageText={updateNewMessageText}
                  updateNewPostText={updateNewPostText} */ />
          </BrowserRouter>
      </React.StrictMode>
  );
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

