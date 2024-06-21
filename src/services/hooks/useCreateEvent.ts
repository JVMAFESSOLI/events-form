import { useMutation } from "@tanstack/react-query";
import { endpoints } from "../endpoints";

const useCreateEvent = () =>
  useMutation((payload: any) => RequestService.post(endpoints.teste, payload));

export default useCreateEvent;
