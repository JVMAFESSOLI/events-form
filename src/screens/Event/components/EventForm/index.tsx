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
import { joiResolver } from "@hookform/resolvers/joi";
import { eventFormSchema } from "../../schema";

type EventFormProps = {
  onSave: (data: EventPayload) => void;
};

const EventForm: FC<EventFormProps> = ({ onSave }) => {
  const { register, handleSubmit } = useForm<EventPayload>({
    mode: "onSubmit",
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
        <FormItem message="mínimo 8 caracteres" label="Titulo do evento">
          <Input {...register("title")} min={8} />
        </FormItem>
        <FormItem message="comece com https://" label="Link do evento">
          <Input {...register("url")} />
        </FormItem>
        <FormItem message="somente números" label="Whatsapp para contato">
          <Input {...register("phone")} />
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
          placeholder="Tipo do evento"
          {...register("category", { required: true })}
        />
      </section>
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold border-b-2 pb-2">Privacidade</h1>
        <FormItem
          label="E-mail do administrador"
          message="digite um email válido"
        >
          <Input {...register("email")} />
        </FormItem>
        <FormItem
          label="Senha de acesso para as participantes"
          message="mínimo 8 caracteres"
        >
          <Input {...register("password")} />
        </FormItem>
        <Checkbox
          checked={false}
          id="private-event"
          label="Evento privado"
          // onChange={console.log}
          {...register("private", { required: true })}
        />
      </section>
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold border-b-2 pb-2">Dia e hora</h1>
        <FormItem label="Data">
          <Input {...register("date")} />
        </FormItem>
        <div>
          <Input
            title="Das"
            type="time"
            id="time-from"
            {...register("initialTime", { required: true })}
          />
          <Input
            title="Até"
            type="time"
            id={"time-to"}
            {...register("finalTime", { required: true })}
          />
        </div>
      </section>
      <footer className="bg-gray-100 h-24 flex items-center justify-center rounded-b-md">
        <Button title="Salvar evento" onClick={console.log} type="submit" />
      </footer>
    </form>
  );
};

export default EventForm;
