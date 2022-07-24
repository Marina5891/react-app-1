import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Chat } from './components/Chat/Chat';
import { Profile } from './components/Profile/Profile';
import UserContext from './contexts/UserContext';
import './App.css';

function App({ state, handleAddPost }) {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='wrapper'>
        <Header />
        <Sidebar state={state.users} />
        <div className='wrapper__content'>
          <Routes>
            <Route path='/profile' element={<Profile state={state.profilePage} handleAddPost={handleAddPost} />} />
            <Route path='/chat/*' element={<Chat state={state.chatPage} />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
