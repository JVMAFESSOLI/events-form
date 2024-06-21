import Joi from "@hapi/joi";
import { EventPayload } from "../components/EventForm/types";

const eventFormSchema = Joi.object<EventPayload>({
  url: Joi.string().required(),
  date: Joi.number().required(),
  private: Joi.boolean().required(),
  category: Joi.string().required(),
  password: Joi.string().required(),
  finalTime: Joi.number().required(),
  initialTime: Joi.number().required(),
  title: Joi.string().min(8).required(),
  note: Joi.string().max(2000).required(),
  phone: Joi.number().min(11).max(11).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

export default eventFormSchema;
