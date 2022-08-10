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
  }, [params]);

  const refreshList = async () => {
    if (!params.query) return;

    const result = await getBooks(params);
    setItems(result.items);

    console.log(result.total);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <Container>
      <h1>책 검색</h1>
      <Form onChange={handleChange} />
      <List data={items} />
      <Pagination nowPage={page} total={total} onChange={() => {}} />
    </Container>
  );
};

const Container = styled.div``;

export default Book;
