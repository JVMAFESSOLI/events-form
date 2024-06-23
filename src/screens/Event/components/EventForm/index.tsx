import { joiResolver } from "@hookform/resolvers/joi";
import { eventFormSchema } from "../../schema";
import { useForm } from "react-hook-form";
import { EventPayload } from "./types";
import { FC } from "react";
import {
  Button,
  Checkbox,
  Combobox,
  FormItem,
  Input,
  Textarea,
} from "../../../../components";
import { maskedPhone } from "../utils";

type EventFormProps = {
  onSave: (data: EventPayload) => void;
};

const EventForm: FC<EventFormProps> = ({ onSave }) => {
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<EventPayload>({
    mode: "onChange",
    resolver: joiResolver(eventFormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSave)}
      className="flex-row justify-center items-center mx-auto w-6/12 bg-white bound p-12 rounded-md space-y-8"
    >
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold border-b-2 pb-2">
          Informações do Evento
        </h1>
        <FormItem message={errors.title?.message} label="Titulo do evento">
          <Input
            minLength={8}
            {...register("title")}
            placeholder="mínimo 8 caracteres"
          />
        </FormItem>
        <FormItem message={errors.url?.message} label="Link do evento">
          <Input {...register("url")} placeholder="comece com https://" />
        </FormItem>
        <FormItem message={errors.phone?.message} label="Whatsapp para contato">
          <Input
            maxLength={15}
            {...register("phone")}
            value={watch("phone")}
            placeholder="somente números"
            onChange={(e) => setValue("phone", maskedPhone(e.target.value))}
          />
        </FormItem>
        <FormItem label="Informações extras">
          <Textarea {...register("note")} />
        </FormItem>
        <Combobox
          key={"category"}
          label="Categoria"
          // onChange={}
          items={[
            "Carnaval",
            "Festa junina",
            "Virada do ano",
            "Festa de debutantes",
            "Aniversário infantil",
            "Despedida de solteiro",
          ]}
          {...register("category")}
          placeholder="Tipo do evento"
        />
      </section>
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold border-b-2 pb-2">Privacidade</h1>
        <FormItem
          label="E-mail do administrador"
          message={errors.email?.message}
        >
          <Input
            type="email"
            {...register("email")}
            placeholder="usuario@provedor.com"
          />
        </FormItem>
        <FormItem
          message={errors.password?.message}
          label="Senha de acesso para as participantes"
        >
          <Input
            type="password"
            {...register("password")}
            placeholder="Mínimo 8 caracteres"
          />
        </FormItem>
        <label className="flex flex-row items-center gap-2">
          <Input
            {...register("private")}
            type="checkbox"
            value={"private"}
            name="Evento privado"
            checked={watch("private") === true}
            onClick={() => setValue("private", !watch("private"))}
          />
          Evento privado
        </label>
      </section>
      <h1 className="text-2xl font-semibold border-b-2 pb-2">Dia e hora</h1>
      <section className="flex gap-8 justify-center items-center">
        <FormItem label="Data">
          <Input {...register("date")} type="date" />
        </FormItem>

        <FormItem label="Das">
          <Input
            title="Das"
            type="time"
            id="time-from"
            placeholder="19:00"
            {...register("initialTime")}
          />
        </FormItem>
        <FormItem label="até">
          <Input
            title="Até"
            type="time"
            id={"time-to"}
            placeholder="20:00"
            {...register("finalTime")}
          />
        </FormItem>
      </section>
      <footer className="bg-gray-100 h-24 flex items-center justify-center rounded-b-md">
        <Button
          type="submit"
          disabled={!isValid}
          onClick={console.log}
          title="Salvar evento"
        />
      </footer>
    </form>
  );
};

export default EventForm;
