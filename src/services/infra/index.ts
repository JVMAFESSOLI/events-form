import axios, { AxiosResponse, HttpStatusCode, Method } from "axios";

type HttpRequest = {
  url: string;
  method: Method;
  body?: any;
};

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  data?: T;
};

type HttpClient<R = any> = {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
};

const HttpClient = (): HttpClient => {
  const axiosInstance = axios.create();

  const request = async (data: HttpRequest): Promise<HttpResponse> => {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axiosInstance.request({
        url: data.url,
        data: data.body,
        method: data.method,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data,
    };
  };
};
