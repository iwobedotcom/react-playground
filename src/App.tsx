import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SuperHeroes from "./components/super-heroes";
import Header from "./components/header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SuperHero from "./components/super-hero";
import ParallelQuery from "./components/parallel-query";
import Form from "./components/form";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/super-heroes" element={<SuperHeroes />} />
            <Route path="/super-heroes/:id" element={<SuperHero />} />
            <Route path="/parallel-query" element={<ParallelQuery />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
