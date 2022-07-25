import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Chat } from './components/Chat/Chat';
import { Profile } from './components/Profile/Profile';
import './App.css';

function App({ state, addPost, addMessage, updateNewPostText, updateNewMessageText }) {

  return (
    <div className='wrapper'>
      <Header />
      <Sidebar state={state.users} />
      <div className='wrapper__content'>
        <Routes>
          <Route
            path='/profile'
            element={<Profile
              profilePage={state.profilePage}
              addPost={addPost}
              updateNewPostText={updateNewPostText} />} />
          <Route
            path='/chat/*'
            element={<Chat
              chatPage={state.chatPage}
              addMessage={addMessage}
              updateNewMessageText={updateNewMessageText} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
