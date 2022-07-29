import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Chat } from './components/Chat/Chat';
import { Profile } from './components/Profile/Profile';
import './App.css';

function App(props) {
  return (
    <div className='wrapper'>
      <Header />
      {/* <Sidebar state={props.store.getState().users} /> */}
      <div className='wrapperContent'>
        <Routes>
          <Route
            path='/profile'
            element={<Profile store={props.store} />} />
          <Route
            path='/chat/*'
            element={<Chat store={props.store} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
