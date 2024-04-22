import { EventForm } from "../../components";

const CreateEvent = () => {
  return (
    <div className="flex-row w-screen h-screen bg-gray-200">
      <section className="h-64 bg-stone-900 flex-row items-center pt-12">
        <h1 className="text-4xl text-white font-bold mb-4">
          Crie e compartilhe <br /> seu evento.
        </h1>
        <p className="text-base text-blue-400 font-normal">
          O primeiro passo, é preencher esse <br /> formulário de inscrição.
        </p>
        <EventForm onSave={console.log} />
      </section>
    </div>
  );
};

export default CreateEvent;
