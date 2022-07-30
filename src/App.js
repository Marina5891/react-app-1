import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Profile } from './components/Profile/Profile';
import ChatContainer from './components/Chat/ChatContainer';
import './App.css';

function App(props) {

  return (
    <div className='wrapper'>
      <Header />
      <Sidebar sidebar={props.sidebar} />
      <div className='wrapperContent'>
        <Routes>
          <Route
            path='/profile'
            element={<Profile />} />
          <Route
            path='/chat/*'
            element={<ChatContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
