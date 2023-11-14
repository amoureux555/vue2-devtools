import request from "@/utils/request";
// 百度热搜
export const searchApi = () => {
  return request({
    url: `/auth/index.jsp`,
    method: "get",
    // params: params, // {pagenum, pagesize, start_time, end_time, uname}
    // params,
  });
};

// // 权限创建
// export const postAuthsApi = (params) => {
//   return request({
//     url: `/auth/create.jsp`,
//     method: "post",
//     data: qs.stringify(params),
//   });
// };
