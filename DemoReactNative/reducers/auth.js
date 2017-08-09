import { LOGIN, LOGOUT } from '../constants';

const initialState = {
  isLoggedIn: false,
  username: '',
  password: ''
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        state,
        isLoggedIn: true,
        username: action.username,
        password: action.password
      }
    case LOGOUT:
    return {
      state,
      isLoggedIn: false,
      username: '',
      password: ''
    }
    default:
      return state;
  }
}
