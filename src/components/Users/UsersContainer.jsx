import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountPagesAC } from '../../redux/usersReducer';
import { Users } from './Users';
import { connect } from 'react-redux';
import * as axios from 'axios';

export class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount)
      })
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => this.props.setUsers(response.data.items))
  }

  render() {
    return (
      <Users
        totalCountPages={this.props.totalCountPages}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        pageSize={this.props.pageSize}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
