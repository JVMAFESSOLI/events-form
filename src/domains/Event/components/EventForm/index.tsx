import { useForm } from "react-hook-form";
import { EventPayload } from "./types";
import { FC } from "react";
import {
  Button,
  Checkbox,
  Combobox,
  Input,
  Textarea,
} from "../../../../components";

type EventFormProps = {
  onSave: (data: EventPayload) => void;
};

const EventForm: FC<EventFormProps> = ({ onSave }) => {
  const { register, handleSubmit } = useForm<EventPayload>({
    mode: "onSubmit",
  });

  return (
    <form
      onSubmit={handleSubmit(onSave)}
      className="flex-row justify-center items-center w-5/12 bg-white bound p-12 rounded-md space-y-8"
    >
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold border-b-2 pb-2">
          Informações do Evento
        </h1>
        <Input
          id="title"
          type="text"
          title="Titulo do evento"
          label="mínimo 8 caracteres"
          {...register("title", { required: true })}
        />
        <Input
          id="url"
          type="text"
          title="Link do evento"
          label="comece com https://"
          {...register("url", { required: true })}
        />
        <Input
          id="phone"
          type="text"
          label="somente números"
          title="Whatsapp para contato"
          {...register("phone", { required: true })}
        />
        <Textarea
          label="Informações extras"
          {...register("note", { required: true })}
        />
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
        <Input
          id="email"
          type="email"
          label="digite um email válido"
          title="E-mail do administrador"
          {...register("email", { required: true })}
        />
        <Input
          id="email"
          type="password"
          label="mínimo 8 caracteres"
          title="Senha de acesso para as participantes"
          {...register("password", { required: true })}
        />
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
        <Input
          id={"date"}
          type="date"
          title="Data"
          {...register("date", { required: true })}
        />
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
