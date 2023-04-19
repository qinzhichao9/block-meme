import axios from "axios";
import store from "@/store";


function checkStatus(response: any) {
    console.log(response);
}

function checkCode(response: any) {
    return response
    // const res = response && response.data;
    // if (!res) {
    //     return res;
    // }
    // const {code, data} = res
    // return res;
}

axios.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = 'application/json'
        const token = store.getters.getToken;
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        // config.baseURL = "https://blockmeme.cn/api/1.0";
        config.baseURL = "http://localhost:8080/api/1.0";
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.resolve(error.response)
);


export default {
    post(url: string, data: any) {
        return axios({
            method: "post",
            url,
            data: data,
            timeout: 120000
        }).then(checkCode);
    },
    put(url: string, data: any) {
        return axios({
            method: "put",
            url,
            data: data,
            timeout: 120000
        }).then(checkCode);
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
