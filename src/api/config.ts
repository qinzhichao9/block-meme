import fetch from "@/lib/fetch";

export const getIndexImages = () => {
    return fetch.get("/index/images", {});
};