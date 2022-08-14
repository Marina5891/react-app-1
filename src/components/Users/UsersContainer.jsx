import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountPagesAC } from '../../redux/usersReducer';
import { Users } from './Users';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalCountPages: state.usersPage.totalCountPages,
    pageSize: state.usersPage.pageSize
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalCountPages: (totalCount) => {
      dispatch(setTotalCountPagesAC(totalCount))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;