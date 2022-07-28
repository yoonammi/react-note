import { useState } from "react";
// 장점1. madal불러올때마다 useState선언 안해도 됨
// 장점2. 버튼코드와 모달코드가 가까운 곳에 있음

// activator: 어떤 elememt를 누르면 모달을 띄울건지
// content: 어떤 modal을 띄울건지

const Modal = ({ activator, content }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {activator(() => setShow(true))}
      {show && content(() => setShow(false))}
    </>
  );
};

export default Modal;

/**
모달개수에 따라 useState도 개수맞춰서 선언한다(문제점)
버튼과 모달이 연관관계가 없다(문제점)
이런 문제점이 있어서 이렇게 한 파일로 작성

{activator} // 버튼
{show && content} //모달
 * 
 */
