import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Chat } from './components/Chat/Chat';
import { Profile } from './components/Profile/Profile';
import './App.css';

function App({ dispatch, state }) {

  return (
    <div className='wrapper'>
      <Header />
      <Sidebar state={state.users} />
      <div className='wrapperContent'>
        <Routes>
          <Route
            path='/profile'
            element={<Profile
              dispatch={dispatch}
              profilePage={state.profilePage} />} />
          <Route
            path='/chat/*'
            element={<Chat
              dispatch={dispatch}
              chatPage={state.chatPage}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
