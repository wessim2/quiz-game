import Axios from 'axios';

const url : string = import.meta.env.VITE_TRIVIA_API

export const api = Axios.create({
  baseURL: url,
});
