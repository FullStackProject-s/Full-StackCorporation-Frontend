import "./styles/tailwindStyles.scss";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";

export const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="login/" element={<Login />}/>
      </Route>
    </Routes>
  );
};
