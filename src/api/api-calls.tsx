import { get, post, remove } from './index'

// Check if a given username already exists
export const checkIfUsernameExists = (username: string) =>
  get(`/user/check-username/?username=${username}`)
    .then(response => response)
    .catch(error => Promise.reject(error.response))

// Get my USER details  /user/
export const getUserDetails = () =>
  get(`/user/`)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error.response))

// Delete my USER details  /user/
export const deleteUserDetails = () =>
  remove(`/user/`)
    .then(response => response)
    .catch(error => Promise.reject(error.response))

// create my USER details  /user/
export const createUser = (values: {
  first_name: string
  last_name: string
  email: string
  gender: number
  date_of_birth: string
}) =>
  post(`/user/`, values)
    .then((response: any) => response)
    .catch((error: { response: any }) => Promise.reject(error.response))

// post USER body
export const postUserBody = (values: {
  height: number
  height_unit: string
  weight: number
  weight_unit: string
}) =>
  post(`/user/body-info/`, values)
    .then(response => Promise.resolve(response))
    .catch((error: { response: any }) => Promise.reject(error.response))
