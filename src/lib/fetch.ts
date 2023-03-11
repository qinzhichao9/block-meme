import axios from "axios";


const service = axios.create({
  baseURL: 'http://150.158.152.35:8082',
  timeout: 10000000
})

function checkStatus(response: any) {
  console.log(response);
}

function checkCode(response: any) {
  return response;
}

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => response,
  (error) => Promise.resolve(error.response)
);

export default {
  post(url: string, data: any) {
    return axios({
      method: "post",
      url,
      data: data,
      timeout: 120000
    });
  },
  put(url: string, data: any) {
    return axios({
      method: "put",
      url,
      data: data,
      timeout: 120000
    });
  },
  get(url: string, data: any) {
    return axios({
      method: "get",
      url,
      data: data,
      timeout: 120000
    });
  },
  delete(url: string, data: any) {
    return axios({
      method: "delete",
      url,
      data: data,
      timeout: 120000
    });
  }
};
