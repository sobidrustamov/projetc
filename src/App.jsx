import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/ap" element={<MainLayout />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
