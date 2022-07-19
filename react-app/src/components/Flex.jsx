import styled from "styled-components";

// flex : 부모요소에 설정. 자식요소들의 배치를 결정
// 1. block요소(div) 가로로 배치
// 2. 수직 정렬 맞출때

const Flex = () => {
  return (
    <Parent>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </Parent>
  );
};

const Parent = styled.div`
  background: gray;
  height: 600px;
  display: flex;
  flex-wrap: wrap; // 자식이 부모 밖으로 튀어 나왔을때 wrap 되도록
`;

const Box = styled.div`
  width: 300px;
  height: 100px;
  flex-shrink: 0; // 부모가 줄면 같이 줄어드는 속성
`;

const Box1 = styled(Box)`
  background: red;
  flex-grow: 1;
`;
const Box2 = styled(Box)`
  background: green;
  height: 200px;
`;
const Box3 = styled(Box)`
  background: yellow;
  height: 50px;
  flex-grow: 1;
`;
const Box4 = styled(Box)`
  background: orange;
`;

export default Flex;
