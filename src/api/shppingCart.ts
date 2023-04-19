import fetch from "@/lib/fetch";

export const addShoppingCart = (data: any) => {
    return fetch.post("/cart/add", data);
};

export const getShoppingCart = () => {
    return fetch.get("/cart/items", {});
};

export const calculateCartPrice = (data:any) => {
    return fetch.put("/cart/price", data);
};