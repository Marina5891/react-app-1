const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_PAGES = 'SET_TOTAL_COUNT_PAGES';
const SET_IS_LOADING_SPINNER = 'SET_IS_LOADING_SPINNER';

let inisialState = {
  users: [],
  currentPage: 1,
  totalCountPages: 0,
  pageSize: 8,
  isLoading: false
};

const usersReducer = (state = inisialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber
      }
    case SET_TOTAL_COUNT_PAGES:
      return {
        ...state,
        totalCountPages: action.totalCount
      }
    case SET_IS_LOADING_SPINNER: 
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalCountPagesAC = (totalCount) => ({ type: SET_TOTAL_COUNT_PAGES, totalCount });
export const setIsLoadingSpinnerAC = (isLoading) => ({ type: SET_IS_LOADING_SPINNER, isLoading });

export default usersReducer;