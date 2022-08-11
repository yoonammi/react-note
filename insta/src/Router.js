import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        ddd
        <Route path="/" element={<Main />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
