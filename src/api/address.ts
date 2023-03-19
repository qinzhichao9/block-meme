import fetch from "@/lib/fetch";

export const deleteAddress = (id: string) => {
    return fetch.delete("/address/delete?id=" + id, {});
}