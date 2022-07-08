import request from './request'

// 登录
export const LoginApi = (params: any) => {
  return request.post('auth/jwt/signin', params);
}

// 获取文章列表
export const GetAllPostsApi = () => {
  return request.get("v1/posts");
}

// 注册
export const RegisterApi = (params: any) => {
  return request.post("auth/jwt/signup", params);
}