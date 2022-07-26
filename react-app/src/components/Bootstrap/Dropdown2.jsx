import { useRef } from "react";
import styled from "styled-components";
import useDropdown from "../../hooks/useDropdown";

const Dropdown = () => {
  const wrapperEl = useRef(null);
  const [show, setShow] = useDropdown(wrapperEl);

  return (
    <Wrapper ref={wrapperEl}>
      <Button onClick={() => setShow(!show)}>Dropdown Button</Button>

      {show && (
        <List>
          <Item>Action</Item>
          <Item>Another action</Item>
          <Item>something else</Item>
        </List>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
  line-height: 24px;
`;
const List = styled.div`
  position: absolute;
  top: 40px;
  width: 200px;
  border-radius: 5px;
  padding: 10px 0;
  border: 1px solid #efefef;
`;
const Item = styled.div`
  cursor: pointer;
  padding: 5px 20px;
  &:hover {
    background: #e9ecef;
  }
`;

export default Dropdown;
