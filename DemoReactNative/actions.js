import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, LOGIN, LOGOUT } from './constants'

export function fetchPeopleFromAPI() {
  return (dispatch) => {
    dispatch(getPeople())
    fetch('https://swapi.co/api/people/')
    .then(data => data.json())
    .then(json => {
      dispatch(getPeopleSuccess(json.results))
    })
    .catch(err => dispatch(getPeopleFailure(err)))
  }
}

export function signUp(username, password) {
  return (dispatch) => {
    dispatch(login(username, password))
  }
}

export function signOut() {
  return (dispatch) => {
    dispatch(logout())
  }
}

export function getPeople() {
  return {
    type: FETCHING_PEOPLE
  }
}

export function getPeopleSuccess(data) {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    data,
  }
}

export function getPeopleFailure() {
  return {
    type: FETCHING_PEOPLE_FAILURE
  }
}

export function login(username, password) {
  return {
    type: LOGIN,
    username: username,
    password: password
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
