import { eventFormSchema } from "@/screens/Event/screens/CreateEvent/schema";
import { FormProvider, useForm } from "react-hook-form";
import { EventForm } from "@/screens/Event/components";
import { joiResolver } from "@hookform/resolvers/joi";
import { EventPayload } from "@/models/ModelEvent";
import { useCreateEvent } from "@/screens/Event/services";

const CreateEvent = () => {
  const form = useForm<EventPayload>({
    mode: "onChange",
    resolver: joiResolver(eventFormSchema),
  });

  const { mutate: mutateCreateEvent } = useCreateEvent();

  return (
    <div className="bg-gray-300 pb-24">
      <section className="flex-row items-center h-64 bg-stone-900 p-12">
        <div className="w-6/12 mx-auto">
          <h1 className="text-4xl text-white font-bold mb-4">
            Crie e compartilhe <br /> seu evento.
          </h1>
          <p className="text-base text-blue-400 font-norma">
            O primeiro passo, é preencher esse <br /> formulário de inscrição.
          </p>
        </div>
      </section>
      <div className="-mt-12">
        <FormProvider {...form}>
          <EventForm onSave={mutateCreateEvent} />
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateEvent;
