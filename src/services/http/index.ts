import { HttpResponse } from "../protocols/http";

import { AxiosHttpClient } from "../infra";

type Post = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>;

function RequestHandler() {
  const axios = AxiosHttpClient();

  const post: Post = (path, params) =>
    axios.request({
      url: `http://localhost:3000${path}`,
      body: params,
      method: "post",
    });

  return {
    post,
  };
}

export const Api = RequestHandler();
