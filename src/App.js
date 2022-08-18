import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import ChatContainer from './components/Chat/ChatContainer';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';

function App(props) {

  return (
    <div className='wrapper'>
      <Header />
      <Sidebar sidebar={props.sidebar} />
      <div className='wrapperContent'>
        <Routes>
          <Route path='profile' element={<ProfileContainer />}>
            <Route
              path=':userId'
              element={<ProfileContainer />} />
          </Route>
          <Route
            path='/chat/*'
            element={<ChatContainer />} />
          <Route
            path='/users'
            element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
