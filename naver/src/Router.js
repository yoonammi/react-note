import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import Book from "./components/pages/Book";
import Movie from "./components/pages/Movie";
import BookDetail from "./components/pages/BookDetail";

import Header from "./components/organisms/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* 중첩라우팅 */}
        <Route element={<Header />}>
          {/* 자식라우팅 */}
          <Route path="/" element={<Main />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:isbn" element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/*
react-router-dom : 페이지 만들어서 왔다 갔다 이동하기 위해서 설치

어떤 주소에 어떤 컴포넌트를 뿌려줄지 라우터 컴퍼넌트에서 설정하자

BrouserRouter: 라우터 종류
Routes : 라우트들을 정의
Route: 여기에 주소와 컴포넌트를 적는다
*/
