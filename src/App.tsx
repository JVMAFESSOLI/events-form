import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreateEvent } from "./screens/Event/screens";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <CreateEvent />
      </QueryClientProvider>
    </div>
  );
}

export default App;
