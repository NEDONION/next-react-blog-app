import axios from 'axios';

const base = {
  baseUrl: '/api/',
  register: "auth/signup",
  signin: "auth/signin",
  getAllPosts: "v1/posts"
}

const api = {
  register(params: any) {
    return axios.post(base.baseUrl + base.register, params);
  },
  signin(params: any) {
    return axios.post(base.baseUrl + base.signin, params);
  },
  getAllPosts() {
    return axios.get(base.baseUrl + base.getAllPosts);
  },
}

export default api;