import {
  Button,
  Checkbox,
  Combobox,
  Input,
  Textarea,
} from "../../../../components";

const EventForm = () => {
  return (
    <div>
      <Input title="Título do evento" type="text" label="mínimo 8 caracteres" />
      <Checkbox
        id="1"
        checked={true}
        label="Evento privado"
        onChange={console.log}
      />
      <Combobox
        id="1"
        label="Categoria"
        placeholder="Tipo do evento"
        onChange={console.log}
        items={[
          "bailão",
          "piseiro",
          "pisadinha",
          "forro",
          "gospel",
          "bagaceira",
          "aquele outro",
          "um nome bem grandão",
        ]}
      />
      <Textarea label="Informações extras" />
      <Button id="1" title="Salvar evento" onClick={console.log} />
    </div>
  );
};

export default EventForm;
