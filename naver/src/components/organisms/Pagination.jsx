import React from "react";

import styled, { css } from "styled-components";

const Pagination = ({ nowPage, total, onChange }) => {
  const display = 10; // 버튼이 몇개씩 보여질것이냐
  const last = Math.ceil(total / display);
  const btnLength = 5;
  const start = Math.ceil(nowPage / btnLength) * btnLength - (btnLength - 1);
  const end = start + btnLength - 1 > last ? last : start + btnLength - 1;

  //   1~10 1
  //   11~20 11
  //   21~30 21
  //   91~100 91

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return (
    <Container>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>{"<"}</BtnPage>
      )}
      {pages.map((page) => (
        <BtnPage active={page === nowPage} onClick={() => onChange(page)}>
          {page}
        </BtnPage>
      ))}
      {nowPage < last && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>{">"}</BtnPage>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const BtnPage = styled.button`
  background: #ecf1ff;
  color: #3f6bcc;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  & + & {
    margin-left: 5px;
  }
  ${({ active }) =>
    active &&
    css`
      background: skyblue;
      color: blue;
    `};
`;

export default Pagination;
