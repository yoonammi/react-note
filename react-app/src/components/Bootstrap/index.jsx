import styled from "styled-components";

import Accordion from "./Accordion";
import { data1, data2 } from "../../datas/accordion";
// import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";

const Bootstrap = () => {
  return (
    <Layout>
      <Accordion data={data1} />
      <Accordion data={data2} />
      {/* <Dropdown /> */}
      <Dropdown2 />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
