import fetch from "@/lib/fetch";

export const getHandbagList = () => {
    return fetch.get("handbag/get-list", {});
}

export const getDetail = (id: string) => {
    return fetch.get("handbag/detail/" + id, {});
}