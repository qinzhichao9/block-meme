import fetch from "@/lib/fetch";

export const getCurrentUserInfo = () => {
    return fetch.get("/user/info", {})
}

export const getSmsVerifyCode = (phoneNumber: string) => {
    return fetch.put("/user/get-verify-code?phoneNumber=" + phoneNumber, {});
};

export const loginWithSmsCode = (data: any) => {
    return fetch.put("/user/login-with-code", data);
};

export const loginWithPassword = (data: any) => {
    return fetch.put("/user/login-password", data);
};


export const updateUserInfo = (data: any) => {
    return fetch.put("user/update", data);
}