import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const data = {
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
  ],
  postsData: [
    { id: 1, post: 'Hi! How are you?', like: 3 },
    { id: 2, post: 'It is my first post', like: 2 },
    { id: 3, post: 'Ha-ha-ha', like: 10 }
  ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={data} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

