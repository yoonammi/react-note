import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Layout,
  Main,
  Box,
  ImgLogo,
  Form,
  Input,
  BtnSubmit,
  SignUpWrapper,
} from "../atoms/login";

import authApis from "../../apis/auth";

const SignUp = () => {
  const [form, setForm] = useState({
    user_name: "",
    password: "",
    name: "",
  });
  const { user_name, password, name } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authApis.login(form); //form값을 서버에 보내준다
  };

  return (
    <Layout>
      <Main>
        <Box>
          <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></ImgLogo>
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              placeholder="사용자 이름"
              name="user_name"
              value={user_name}
            />
            <Input
              onChange={handleChange}
              placeholder="비밀번호"
              name="password"
              type="password"
              value={password}
            />
            <Input
              onChange={handleChange}
              placeholder="성명"
              name="name"
              value={name}
            />
            <BtnSubmit onClick={handleSubmit}>가입</BtnSubmit>
          </Form>
        </Box>
        <Box>
          <SignUpWrapper>
            계정이 있으신가요? <Link to="/log-in">로그인</Link>{" "}
          </SignUpWrapper>
        </Box>
      </Main>
    </Layout>
  );
};

export default SignUp;
