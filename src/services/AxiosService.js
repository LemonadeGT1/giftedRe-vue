import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 8000
})


// @ts-ignore
export const giphyApi = Axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  rating: 'pg',
  timeout: 5000,
  params: { api_key: 'LUoaIOz6CBpCaFaWBaArmfPbsTqg5BMz' }
})