import { Button, Checkbox, Combobox, Input, TextArea } from "components";

export const EventForm = () => {
  return (
    <div>
      <Input title="Título do evento" type="text" />
      <Checkbox />
      <Combobox />
      <TextArea />
      <Button />
    </div>
  );
};
