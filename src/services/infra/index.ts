import axios, { AxiosResponse } from "axios";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "@/services/protocols/http";

export const AxiosHttpClient = (): HttpClient => {
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

    axiosResponse.status === 401;

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data,
    };
  };
  return { request };
};
