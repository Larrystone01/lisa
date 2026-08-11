import { Route, Routes } from "react-router-dom";
import NavFooterWrapper from "./components/pagewrapper";
import HomePage from "./pages/Index";

export default function App() {
  return (
    <Routes>
      <Route element={<NavFooterWrapper />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
