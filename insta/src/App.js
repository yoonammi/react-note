import { useSetRecoilState } from "recoil";

import isLoginState from "./stores/isLoginState";
import Router from "./Router";
import instance from "./apis";
import { useEffect, useState } from "react";

function App() {
  // 로컬스토리지에 토큰이 있으면 axios 디폴트 헤더 설정
  const setIsLogin = useSetRecoilState(isLoginState);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const { token } = localStorage;
    if (token) {
      instance.defaults.headers.common["Authorization"] = "Bearer " + token;
      setIsLogin(true);
    }
    setIsChecked(true);
  }, []);

  return isChecked && <Router />;
}

export default App;
