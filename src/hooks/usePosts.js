import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPost = (queryData) => {
    // const id = queryData.queryKey[1];
    return axios.get(`http://localhost:3004/posts`);
};

export const usePostQuery = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPost(),
        select: (data) => {
            return data.data;
        },
        // enabled: false,
        // gcTime: 5000, // cache지우는 시간(단위 ms, 기본값 5분)
        // staleTime: 5000, // fresh상태 유지 시간
        // refetchInterval: 3000,  // API 자동 호출 시간간격
        // refetchOnMount: false, // 처음에만 불러오고 다시 api안불러오기
        // refetchOnWindowFocus: true, // 해당 윈도우에 포커스가 맞춰지면 api재 호출
    })
}
