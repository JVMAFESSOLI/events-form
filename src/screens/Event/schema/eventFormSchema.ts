import { EventPayload } from "@/models/ModelEvent";
import Joi from "@hapi/joi";

const eventFormSchema = Joi.object<EventPayload>({
  date: Joi.string().required(),
  category: Joi.string().required(),
  private: Joi.boolean().required(),
  finalTime: Joi.number().required(),
  initialTime: Joi.number().required(),
  note: Joi.string().max(2000).optional(),
  title: Joi.string().min(8).required().messages({
    "string.min": "mínimo 8 caracteres",
    "string.empty": "O campo é obrigatório",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "mínimo 8 caracteres",
    "string.empty": "O campo é obrigatório",
  }),
  phone: Joi.string().min(10).max(15).required().messages({
    "string.min": "mínimo 10 caracteres",
    "string.max": "máximo 15 caracteres",
    "string.empty": "O campo é obrigatório",
  }),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .messages({
      "string.email": "digite um email válido",
      "string.empty": "O campo email é obrigatório",
    }),
  url: Joi.string()
    .required()
    .uri({ scheme: ["https"] })
    .messages({
      "string.uriCustomScheme": 'O link deve começar com "https://"',
      "string.empty": "O campo URL é obrigatório",
    }),
});

export default eventFormSchema;
