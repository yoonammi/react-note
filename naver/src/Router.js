import { BrowserRouter, Routes, Route } from "react-router-dom";

import Book from "./components/Book";
import Main from "./components/Main";
import Movie from "./components/Movie";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
