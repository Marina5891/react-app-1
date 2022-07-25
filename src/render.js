import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, addMessage, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderedEntireTree = (state) => {
    root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} updatenewPostText={updateNewPostText} />
        </BrowserRouter>
    </React.StrictMode>
   );     
}

