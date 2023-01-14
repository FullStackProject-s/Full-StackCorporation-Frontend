import "./styles/tailwindStyles.scss";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Header } from "./components/header";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="login/" element={<Login />} />
      </Route>
    </Routes>
  );
};
