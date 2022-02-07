import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Iphones from "./tartalom/Iphones";
import Tipusok from "./tartalom/Tipusok";
import Adatbeker from "./tartalom/Adatbeker";
import Menu from "./tartalom/Menu";
import Hiba from "./tartalom/Hiba";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Iphones />} />
          <Route path="tipusok" element={<Tipusok />} />
          <Route path="adatbeker" element={<Adatbeker />} />
          <Route path="*" element={<Hiba />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
