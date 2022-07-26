import styled from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Carousels1 from "./Carousels1";

import { data1, data2 } from "../../datas/accordion";
import images from "../../datas/images";

// import { useEffect } from "react";

const Bootstrap = () => {
  // useEffect(()=>{

  // });
  return (
    <Layout>
      <Accordion data={data1} />
      <Accordion data={data2} />
      <Dropdown />
      <Dropdown2 />
      <Carousels1 data={images} />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
