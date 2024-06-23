import { useMutation } from "@tanstack/react-query";
import { endpoints } from "../endpoints";
import { AxiosHttpClient } from "../infra";

const useCreateEvent = () =>
  useMutation((payload: any) => AxiosHttpClient.post(endpoints.teste, payload));

export default useCreateEvent;
