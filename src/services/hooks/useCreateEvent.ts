import { useMutation } from "@tanstack/react-query";
import { EventPayload } from "@/models/ModelEvent";
import { endpoints } from "../endpoints";
import { Api } from "../http";

const useCreateEvent = () =>
  useMutation((payload: EventPayload) => {
    console.log("passou por aqui");
    return Api.post(endpoints.createEvent, payload);
  });

export default useCreateEvent;
