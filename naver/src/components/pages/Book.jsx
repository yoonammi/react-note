import React from "react";

import { useEffect, useState } from "react";

import styled from "styled-components";
import { getBooks } from "../../apis";

import Form from "../templates/Book/Form";
import List from "../templates/Book/List";
import Pagination from "../organisms/Pagination";

const Book = () => {
  const [params, setParams] = useState({ query: "" });
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    refreshList();
  }, [params, page]);

  const refreshList = async () => {
    if (!params.query) return;

    const display = 10;
    const start = (page - 1) * display + 1;

    const { items, total } = await getBooks({ ...params, start });
    setItems(items);
    setTotal(total);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
    setPage(1);
  };

  return (
    <Container>
      <h1>책 검색</h1>
      <Form onChange={handleChange} />
      <List data={items} />
      <Pagination
        nowPage={page}
        total={total}
        onChange={(page) => setPage(page)}
      />
    </Container>
  );
};

const Container = styled.div``;

export default Book;
