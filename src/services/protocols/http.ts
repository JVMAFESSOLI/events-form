import { HttpStatusCode, Method } from "axios";

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  data?: T;
};

export type HttpRequest = {
  url: string;
  method: Method;
  body?: any;
};

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
