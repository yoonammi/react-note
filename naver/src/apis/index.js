import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-client-Id": "Ic8WYme828yv3g7IDQXt",
    "X-Naver-client-Secret": "NfcSof22BS",
  },
});

// axios함수를 이용해 영화를 가져오는 함수
export const getMovies = async (params) => {
  const result = await instance.get("/v1/search/movie.json", {
    params, //query : 키(요청변수)  / params라는 값을 params라는 이름으로 파라미터를 요청 변수를 보냄
  });

  return result.data;
};

export const getBooks = async (params) => {
  const result = await instance.get("/v1/search/book.json", {
    params,
  });

  return result.data;
};

//책 디테일 불러오기
export const getBook = async (params) => {
  const result = await instance.get("/v1/search/book_adv.json", {
    params,
  });
  return result.data;
};

/**
 개방,폐쇄 원칙 검색해보기

 https://openapi.naver.com/v1/search/movie.json 이 주소로 요청을 보내라 => 여기 도메인 주소는 package.json 에 proxy에서 사용
프록시 적용을 하려면 서버를 껐다 켜면 됨

axios.get(첫번째 인자: url, 두번째 인자: 컨피그 객체)

axios: 브라우저에서 서버로 요청을 하는것(라이브러리)

요청을 보내는 파일은 apis폴더에 저장



CORS: cross origin resource sharing 교차출처리소스공유 정책 (cors정책 위반)
브라우저에서 도메인이 다른 서버에 http요청을 할 때 제한
locallhost:3000 -> openapi.naver.com
해결법
1. 서버가 특정 도메인 CORS를 허용해준다
2. 브라우저->내 서버->상대 서버로 요청한다
3. webpack proxy 서버 이용(webpack dev server의 기능중 하나:proxy) -> 브라우저의 요청을 받아서 서버에 대신 요청해준다

forword proxy : 대신 요청해주는것
reverse proxy : 우리가 클라이언트에게 요청을 받아서 서버로 요청을 보내준다, 어느 서버에 보내주는지 알 수 없도록 해서 보안에 좋다 대표로 nginx

웹 어플리케이션 서버 : node.js express, 자바스프링
웹 서버(static한 파일) : vscode의 live server, nginx

network창에서 Headers/payload(우리가 요청한것)/Preview(응답해준것)/

 *
 */
