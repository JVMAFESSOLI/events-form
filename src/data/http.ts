import { HttpStatusCode, Method } from "axios";

export type HttpResponse<T = unknown> = {
  statusCode: HttpStatusCode;
  data?: T;
};

export type HttpRequest = {
  url: string;
  method: Method;
  body?: unknown;
};

export interface HttpClient<R = unknown> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
