import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SuperHeroes from "./components/super-heroes";
import Header from "./components/header";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/super-heroes" element={<SuperHeroes />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
