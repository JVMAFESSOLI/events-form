import {
  Button,
  Checkbox,
  Combobox,
  Input,
  Textarea,
} from "../../../../components";

const EventForm = () => {
  return (
    <div className="w-2/3 bg-white bound p-12">
      <section>
        <h1 className="text-2xl font-semibold border-b-2 pb-2">
          Informações do Evento
        </h1>
        <Input
          type="text"
          title="Titulo do evento"
          label="mínimo 8 caracteres"
        />
        <Input type="text" title="Link do evento" label="comece com https://" />
        <Input
          type="text"
          label="somente números"
          title="Whatsapp para contato"
        />
        <Textarea label="Informações extras" />
        <Combobox
          label="Categoria"
          items={[
            "Carnaval",
            "Festa junina",
            "Virada do ano",
            "Festa de debutantes",
            "Aniversário infantil",
            "Despedida de solteiro",
          ]}
          placeholder="Tipo do evento"
          onChange={console.log}
        />
      </section>
      <section>
        <h1 className="text-2xl font-semibold border-b-2 pb-2">Privacidade</h1>
        <Input
          type="email"
          label="digite um email válido"
          title="E-mail do administrador"
        />
        <Input
          type="password"
          label="mínimo 8 caracteres"
          title="Senha de acesso para as participantes"
        />
        <Checkbox
          checked={false}
          id="private-event"
          label="Evento privado"
          onChange={console.log}
        />
      </section>
      <section>
        <h1 className="text-2xl font-semibold border-b-2 pb-2">Dia e hora</h1>
        <Input title="Data" type="date" />
        <div>
          <Input title="Das" type="time" />
          <Input title="Até" type="time" />
        </div>
      </section>
      <footer>
        <Button title="Salvar evento" onClick={console.log} />
      </footer>
    </div>
  );
};

export default EventForm;
