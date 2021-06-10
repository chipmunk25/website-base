import axios from 'axios'

export const BASE_URL = "https://api.hyperbuildgh.com/v1"
export const DD_URL = "https://api.doubledluxuries.com/v1"
export const ONLINE_TEST_URL = "https://tschms.herokuapp.com/v1"
export const TEST_URL = "http://localhost:8081/v1"

export default () => {
  return axios.create({
    baseURL: TEST_URL,
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}
