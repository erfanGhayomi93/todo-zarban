import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Todos from "./pages/Todos";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <Todos />
      </QueryClientProvider>
    </>
  );
}

export default App;
