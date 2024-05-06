import { useQuery } from "@tanstack/react-query";
import request, { API_KEY } from "../../../config/request";

export const useGetOnTv = (page: number = 1) => {
    return useQuery({
        queryKey: ['on-tv', page],
        queryFn: () => request.get(`/tv/on_the_air`, {
            params: {
                api_key: API_KEY,
                page: page
            }
        }).then((res) => {
            return {
                data: res.data,
                totalPages: res.data.total_pages,
                totalResults: res.data.total_results 
            };
        })
    });
};
