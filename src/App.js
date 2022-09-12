import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import ChatContainer from './components/Chat/ChatContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css';

function App(props) {

  return (
    <div className='wrapper'>
      <HeaderContainer />
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
