import { EventForm } from "../../components";

const CreateEvent = () => {
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
        <EventForm onSave={console.log} />
      </div>
    </div>
  );
};

export default CreateEvent;
