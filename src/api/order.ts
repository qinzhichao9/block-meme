import fetch from "@/lib/fetch";

export const orderConform = (data: any) => {
    return fetch.post("/order/confirm", data);
}

export const submitOrder = (data: any) => {
    return fetch.post("/order/submit", data);
}
export const getMyOrder = () => {
    return fetch.get("/order/myOrder", {});
}