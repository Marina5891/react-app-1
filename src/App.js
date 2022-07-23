import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Chat } from './components/Chat/Chat';
import { Profile } from './components/Profile/Profile';
import './App.css';

function App({ data: { dialogsData, messagesData, postsData } }) {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <div className='wrapper__content'>
        <Routes>
          <Route path='/profile' element={<Profile postsData={postsData} />} />
          <Route path='/chat/*' element={<Chat messagesData={messagesData} dialogsData={dialogsData} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
