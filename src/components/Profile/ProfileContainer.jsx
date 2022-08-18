import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import * as axios from 'axios';

class ProfileContainer extends React.Component {

  componentDidMount() {
    //let userId = this.props.router.params.userId;
    /*     if (!userId) {
          userId = 2;
        } */
    let userId = this.props.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }
  render() {
    return <Profile profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithRouterComponent = (props) => {
  const params = useParams();
  console.log(props)
  return (
    <ProfileContainer
      {...props}
      userId={params.userId ? params.userId : '2'}
    />
  )
}

export default connect(mapStateToProps, { setUserProfile })(WithRouterComponent);

// Alternative code

/* function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
} */

/* export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer)); */