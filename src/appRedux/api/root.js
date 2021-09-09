import axios from 'axios'

export const BASE_URL = "https://api.ukex-abg.org.uk/v1"
export const DD_URL = "https://api.doubledluxuries.com/v1"
export const ONLINE_TEST_URL = "https://tschms.herokuapp.com/v1"
export const TEST_URL = "http://localhost:9010/v1"
//export const FILE_URL = "http://localhost:9010/"
export const FILE_URL = "https://api.ukex-abg.org.uk/"
export default () => {
  return axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}

