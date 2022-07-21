import { useRef, useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import List from "./List";

const Todo = () => {
  const nextId = useRef(4);

  const handleAdd = (content) => {
    const todo = [
      ...todos,
      { id: nextId.current, content: content, checked: false },
    ];
    setTodos(todo);
    nextId.current++;
  };

  const [todos, setTodos] = useState([]);

  const handleDelete = (deleteID) => {
    const nextTodo = todos.filter((todo) => {
      return deleteID !== todo.id;
    });
    setTodos(nextTodo);
  };

  const handleChecked = (id) => {
    const nextTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(nextTodo);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onAdd={handleAdd} />
        <List data={todos} onDelete={handleDelete} onChecked={handleChecked} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 600px;
`;
const Title = styled.div`
  background: #22b8cd;
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;

export default Todo;

// 07.20 노트
// {todos.map((e, i) => {})에서 {}말고 ()를 써야 값을 바로 리턴함
// {todos.map((e, i) => ()) 이렇게! (대신 console.log는 쓸 수 없음)
