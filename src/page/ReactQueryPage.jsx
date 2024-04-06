import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { usePostQuery } from "../hooks/usePosts";

const ReactQueryPage = () => {
  //   const { data, isLoading, isError, error, refetch } = usePostQuery();
  //   console.log("data: ", data, "isLoading:", isLoading);
  //   console.log("error:", isError, error);

  //   if (isLoading) {
  //     return <h1>....Loading</h1>;
  //   }
  //   if (isError) {
  //     return <h1>{error.message}</h1>;
  //   }
  //   return (
  //     <div>
  //       {data?.map((item) => (
  //         <div>{item.title}</div>
  //       ))}
  //       {/* 버튼 누르면 api 호출 */}
  //       <button onClick={refetch}>postList 다시 들고오기</button>
  //     </div>
  //   );

  const ids = [1, 2, 3, 4];

  const FetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`);
  };

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => FetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
      };
    },
  });

  console.log("result: ", results);
  return <div></div>;
};

export default ReactQueryPage;
