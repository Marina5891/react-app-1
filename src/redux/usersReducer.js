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

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalCountPages = (totalCount) => ({ type: SET_TOTAL_COUNT_PAGES, totalCount })
export const setIsLoadingSpinner = (isLoading) => ({ type: SET_IS_LOADING_SPINNER, isLoading })

export default usersReducer;