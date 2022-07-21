import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Profile } from './components/Profile/Profile';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <div className='wrapper__content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs/*' element={<Dialogs />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
