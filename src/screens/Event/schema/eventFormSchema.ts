import Joi from "@hapi/joi";
import { EventPayload } from "../components/EventForm/types";

const eventFormSchema = Joi.object<EventPayload>({
  url: Joi.string()
    .uri({ scheme: ["https"] })
    .required()
    .messages({
      "string.uriCustomScheme": 'O link deve começar com "https://"',
      "string.empty": "O campo URL é obrigatório",
    }),
  date: Joi.number().required(),
  private: Joi.boolean().required(),
  category: Joi.string().required(),
  password: Joi.string().min(8).required().messages({
    "string.min": "mínimo 8 caracteres",
    "string.empty": "O campo é obrigatório",
  }),
  finalTime: Joi.number().required(),
  initialTime: Joi.number().required(),
  title: Joi.string().min(8).required().messages({
    "string.min": "mínimo 8 caracteres",
    "string.empty": "O campo é obrigatório",
  }),
  note: Joi.string().max(2000).required(),
  phone: Joi.string().min(10).max(15).required().messages({
    "string.min": "mínimo 10 caracteres",
    "string.max": "máximo 15 caracteres",
    "string.empty": "O campo é obrigatório",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .messages({
      "string.email": "digite um email válido",
      "string.empty": "O campo email é obrigatório",
    })
    .required(),
});

export default eventFormSchema;
