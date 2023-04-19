import fetch from "@/lib/fetch";

export const deleteAddress = (id: string) => {
    return fetch.delete("/address/delete?id=" + id, {});
}

export const getMyAddress = () => {
    return fetch.get("/address/list", {});
};

export const getAreaCodeList = (parentCode: String) => {
    return fetch.get("/address/get-area-list?parentCode=" + parentCode, {});
}

export const addAddress = (data: any) => {
    return fetch.post("/address/add", data);
};

export const updateAddress = (data: any) => {
    return fetch.put("/address/update", data);
}