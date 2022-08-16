import instance from ".";

const authApis = {
  login: (data) => {
    instance.post("/auth/signup", data); // post는 객체를 통째로 넣어준다 data
  },
};

export default authApis;
