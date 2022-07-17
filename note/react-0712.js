/**
 * <환경세팅>

- chrome

- node.js
 -시작-실행-cmd->node --version

- vscode
 - eslint: js문법검사
 - prettier: 자동정렬
    - 설정 (ctrl + ,)
    - Editor: Default Formmatter: prettier
    - format on save: 체크

- git(기술 이름)-hub(코드 저장소를 제공하는 회사이름) desktop
 - github 가입
 - github dasktop 설치


터미널 열고 리액트 설치
npx create-react-app react-app (프로젝트 만드는 명령어) (끝에꺼는 프로젝트 이름) 하면 폴더 생김
cd react-app (cd ->하위폴더로 이동)
npm start (를 하면 src->index.js가 실행이 됨 - 이 프로젝트의 시작)

npm: Node Package Manager (일종의 저장소 - 깃허브처럼 여러 라이브러리들이 업로드되어 있음 - 이런것들을 npm인스톨 명령어로 다운 받을 수 있다 -> 다운받게 되면 node_modules폴더에 라이브러리들이 설치가 됨)

package.json(가장 기본적인.. 이 프로젝트의 설계도)
- 이곳의 scripts의 start명령어가 실행된다(npm start)
- 이곳의 dependencies에 어떤 라이브러리를 설치했는지 나열해 놓는곳(명세)

ctrl + c : 프로젝트종료

npm run build(프로젝트를 마치고 배포를 할 때 사용) -> build폴더가 생김
build폴더는 public폴더를 기반으로 src 폴더의 것들이 다 한가지 자바스크립트로 빌드가 되어서 빌드 폴더의 index.html 에 주입이 된다, src에서 작업한것들을 static에 응축됨, build폴더를 aws사이트나 등등에 업로드 하면 배포 됨

src->App.js 에서 글자 수정하면 브라우저 화면의 글자가 바꾼 글자로 바뀜

.gitignore 폴더 -> # dependencies에서 보면 /node_modules
(.gitignore : 이 프로젝트를 깃으로 관리를 할때 이 폴더에 있는 폴더와 파일들은 깃으로 관리를 안하겠다)

index.js :

public폴더-index.html에 <div id="root"></div>있고 이 파일을 수정을 하면 브라우저에 나옴
이 index.html은 프로젝트가 랜더링 되는 판이라고 볼 수 있다, 웹 브라우저의 제목을 바꾸거나 구글 어널리틱스 만질때 이곳으로 오면 됨, 페이지가 새로고침 되어도, 페이지가 바뀌어도 항상 이곳에서 랜더링이 된다(single page application)


- webpack: 번들러
  - 역할: 빌드를 해서 scr에 있는것들을 임포트 되어있는 것들을 하나의 자바스크립트 파일로 만들어서 브라우저가 한번에 임포트 하게끔 해주는..
  - import와 from을 구현해주는것

- babel(웹팩 번들러):
 -js 최신 문법을 브라우저가 알아먹을 수 있게 변환

- polyfill:
 - js 최신 함수(기능)를 구현할 수 있게 도와줌

- 리액트 컴포넌트(jsx를 리턴하는 함수)App.js
 - jsx를 return
 - 한가지 요소만 return

export,export default 두 종류가 있다
(
export:
	1) export const a = "a";
	2) const b = "b";
		const c = "c";
		export { b, c };
)


src폴더에 components폴더 생성-> 리액트 컴포넌트 생성: Jsx.jsx, MyComponent.jsx


문법:
- 자바스크립트 문법 쓸때는 중괄호
- 스트링만 보내줄때는 중괄호 필요 없음


- jsx파일들 하나하나가 컴포넌트라고 보면 됨

- 리액트 프로젝트는 컴포넌트들의 조립이다.
- 컴포넌트를 잘 조립하려면 컴포넌트를 잘 쪼개야 한다.
 - 객체지향원칙(SOLID)
 - DRY(Do not Repeat Yourself - 같은 코드를 반복하지 말라.)
 - ㄴ위에껄 잘 여겨서 유지보수 쉬워지고, 기능변경 쉬운 코드를 만들어야한다


리액트 컴포넌트: 클래스형 컴포넌트(옛날에는 거의 4~5년 전 쯤, react hook이 나온 뒤로 거의 사장됨), 함수형 컴포넌트
리액트 컴포넌트를 짤때 대부분 함수형으로 짠다고 보면 됨.

props -> 부모가 자식에게 내려주는 값
props.children : 태그 사이의 값을 내려주는것
 */
