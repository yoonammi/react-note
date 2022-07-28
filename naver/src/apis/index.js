import axios from "axios";

export const getMovies = async () => {
  const result = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-client-Id": "Ic8WYme828yv3g7IDQXt",
      "X-Naver-client-Secret": "NfcSof22BS",
    },
    params: { query: "스파이더맨" },
  });

  return result.data;
};

/**
 개방,폐쇄 원칙 검색해보기

CORS: cross origin resource sharing 교차출처리소스공유 정책
브라우저에서 도메인이 다른 서버에 http요청을 할 때 제한
locallhost:3000 -> openapi.naver.com
해결법
1. 서버가 특정 도메인 CORS를 허용해준다
2. 브라우저->내 서버->상대 서버로 요청한다
3. webpack proxy 서버 이용 
 * 
 */
