import { useState } from "react";

import styled from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Carousels1 from "./Carousel";
import ModalName from "./Modal/ModalName";

import { data1, data2 } from "../../datas/accordion";
import images from "../../datas/images";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("홍길동");
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
        <button onClick={() => setShowModal(true)}>이름 바꾸기</button>
        {showModal && (
          <ModalName
            name={name}
            onClose={() => setShowModal(false)}
            onChange={(val) => setName(val)}
          />
        )}
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
