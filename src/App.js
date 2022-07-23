import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Chat } from './components/Chat/Chat';
import { Profile } from './components/Profile/Profile';
import './App.css';

function App({ state }) {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <div className='wrapper__content'>
        <Routes>
          <Route path='/profile' element={<Profile state={state.profilePage} />} />
          <Route path='/chat/*' element={<Chat state={state.chatPage} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
