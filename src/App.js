import { Present } from "./screens/Apresentacao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./screens/NotFound";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { Header } from "./common-components/Header/Header";
import { Details } from "./screens/Details";
export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/detalhes/:userId" element={<Details />} />
          <Route path="/" element={<Present />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}