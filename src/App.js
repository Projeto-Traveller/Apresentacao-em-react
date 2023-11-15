import { Present } from "./screens/Apresentacao"; 
import { Details } from "./screens/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./screens/NotFound";
export function App() {
	return (
		<BrowserRouter>
      <Routes>
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="/" element={<Present />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

	);
}