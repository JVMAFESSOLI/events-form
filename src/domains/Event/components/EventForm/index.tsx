import {
  Button,
  Checkbox,
  Combobox,
  Input,
  TextArea,
} from "../../../../components";

const EventForm = () => {
  return (
    <div>
      <Input title="Título do evento" type="text" label="mínimo 8 caracteres" />
      <Checkbox />
      <Combobox />
      <TextArea />
      <Button />
    </div>
  );
};

export default EventForm;
