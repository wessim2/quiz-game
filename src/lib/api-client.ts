import Axios from 'axios';

// const url : string = import.meta.env.VITE_TRIVIA_API
const url : string = "https://opentdb.com"
export const api = Axios.create({
  baseURL: url,
});
