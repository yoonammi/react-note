import instance from ".";

const authApis = {
  signUp: async (data) => {
    try {
      const result = await instance.post("/auth/signup", data); // post는 객체를 통째로 넣어준다 data
      return result.data;
    } catch (err) {
      return err.response.data;
    }
  },

  logIn: async (data) => {
    try {
      const result = await instance.post("/auth/login", data);
      return result.data;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default authApis;
