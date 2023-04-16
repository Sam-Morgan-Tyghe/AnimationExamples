import { Auth } from 'aws-amplify'
import axios from 'axios'
import { SERVER } from '~/settings'

axios.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      // alert('We are facing Network issues.Please come back again');
      return null
    }
    if ([502].includes(error.response.status)) {
      return Promise.reject(error)
    }
    if (error.response.status === 401) {
      // window.location.reload(false);
      return Promise.reject(error)
    }
    if ([400, 403].includes(error.response.status)) {
      return Promise.reject(error)
    }
    return error
  },
)
export const getToken = () =>
  Auth.currentSession()
    .then(res => {
      const idToken = res.getIdToken() as any
      return idToken.jwtToken
    })
    .catch(err => {
      console.log('Error getting token:', err)
    })

const authHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
})

export const get = async (endpoint: string) => {
  const token = (await getToken()) ?? ''
  return axios({
    url: SERVER + endpoint,
    method: 'get',
    headers: authHeaders(token),
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response))
}

export const post = async (endpoint: string, data: any, config?: any) => {
  const token = (await getToken()) ?? ''

  return axios({
    url: SERVER + endpoint,
    method: 'post',
    headers: { ...authHeaders(token), ...config },
    responseType: 'json',
    data,
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response))
}

export const postImageS3 = async (endpoint: string, data: any, config: any) => {
  return axios({
    url: endpoint,
    method: 'post',
    headers: { ...config },
    responseType: 'json',
    data,
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response))
}

export const patch = async (endpoint: string, data: any) => {
  const token = (await getToken()) ?? ''

  return axios({
    url: SERVER + endpoint,
    method: 'patch',
    headers: authHeaders(token),
    responseType: 'json',
    data,
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response))
}

export const put = async (endpoint: string, data: any) => {
  const token = (await getToken()) ?? ''

  return axios({
    url: SERVER + endpoint,
    method: 'put',
    headers: authHeaders(token),
    responseType: 'json',
    data,
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response))
}

export const remove = async (endpoint: string, data?: any) => {
  const token = (await getToken()) ?? ''
  return axios({
    url: SERVER + endpoint,
    method: 'delete',
    headers: authHeaders(token),
    responseType: 'json',
    data,
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response))
}
