import { useState } from "react";

import styled, { useTheme } from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Carousels1 from "./Carousel";
import ModalName from "./Modal/ModalName";
import Modal from "./Modal/index";

import { data1, data2 } from "../../datas/accordion";
import images from "../../datas/images";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalNickname, setShowModalNickname] = useState(false);
  const [name, setName] = useState("홍길동");
  const [nickname, setNickname] = useState("별명");
  return (
    <Layout>
      <Accordion data={data1} />
      <Accordion data={data2} />
      <Dropdown />
      <Dropdown2 />
      <Carousels1 data={images} type="fade-in" />
      <Carousels1 data={images} type="slide" />
      <div>
        {name}
        <Modal
          activator={(onOpen) => <button onClick={onOpen}>이름 바꾸기</button>}
          content={(onClose) => (
            <ModalName
              type="이름"
              name={name}
              onClose={onClose}
              onChange={(val) => setName(val)}
            />
          )}
        />
      </div>
      <div>
        {nickname}
        <Modal
          activator={(onOpen) => <button onClick={onOpen}>닉네임 바꾸기</button>}
			content={(onClose) => (
			<Modalname
				type="닉네임"
				name={nickname}
				onClose={onClose}
				onChange={(val) => setNickname(val)}
			/>
        />
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
