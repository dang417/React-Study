# amazon  클론코딩 오류난 것들 및 느낀점 정리

> ### [오류]

---

1. npm 파일인 react-currency-format 설치
   
   - 설치시 react-currency-format 버전과 react의 버전이 달라 제대로 설치가 안되었음 `--force` 을 npm i react-currency-format 뒤에 붙여서 작성하니 제대로 설치가 되었음
   
   - 이후의 다른 파일들도 --force를 이용하여 버전을 강제로 맞추어 설치함

2. Route 
   
   - Route가 기존의 Switch 에서 변경됨
   
   - import 해서 받는 방식은 동일하지만 작성할 때 Switch를 Route로 변경하여 작성하여야함 또한 element로 내부에 들어갈 요소를 `{}` 로 묶어서 작성해 주어야 함

3. firebase
   
   - 가장 고난을 겪은 부분
   
   - 파이어베이스와 npm을 연동하려 하는데 currency-format 때문인지 자꾸 에러가 나며 해결이 안됨
   
   - 역시 다운로드 할때 --force를 이용하여 버전을 강제로 맞추어 작성하여 해결함

4. useStateValue
   
   - 실행할 때 빨간창이 뜨는데 어디가 에러인지 제일 찾지 못했던 부분
   
   - 파일을 import 한 뒤 함수로 작성하여야 하는데 자동완성으로 뒷부분에 `()` 가 같이 포함 된 줄 알았는데 작성이 안되어서 오류가 제일 많이 났음
   
   - useStateValue를 사용하기 위해 import 후 const로 useStateValue에 저장 된 함수를 불러와서 사용하는데 결제정보와 결제정보를 부르기 위한 dispatch를 이용하여 사용하는데 배열의 이름을 지정하지 않고
     
     `const [{basket, user}, dispatch] = useStateValue()` 로 작성하여 basket과 user를 사용한다.

5. useNavigate
   
   - ES6 버전 이후 useHistory에서 Navigate로 변경됨 또한 `history.push()` 부분도 `navigate()` 로 변경되어 push 되지 않는 이유를 찾는데 에를 먹음

6. useEffect
   
   - 사용자 정보를 저장하는 함수로 react 내장함수 인데 역시 import 해서 사용하여야 한다.
   
   - 사용자 정보를 Reducer에 저장 후 firebase와 Reducer에 있는 user 정보를 바탕으로 전체 페이지에 user의 정보를 저장하는 방식이 독특했다. dispatch를 이용하여 reducer의 파일을 불러오고 불러온 정보를 바탕으로 useEffect를 실행시키는데 크게 3가지 타입으로 구분된다.
     
     아무것도 적지 않은 경우 / [] / [요소]
     
     아무것도 적지 않으면 무한반복 되기에 useEffect 함수가 끝나기 전 소괄호 내부에 [] 를 적어서 1번만 실행이 되도록 작성해 주는게 가장 중요했다. 또한 useEffect 내부에 요소가 있는경우에는 useEffect의 요소가 변경될 때 마다 useEffect가 실행된다.

---

> ### [느낀점]

- 우선 전반적인 클론코딩을 하며 Vue와 사용법이 크게 다르지 않았어서 코드 자체는 이해하기 쉬웠음
  
  하지만 전체적인 npm 사용법이나 파일의 구조 등이 헷갈리는 부분이 많았다.
  
  state를 이용하기 위해 Reducer 라는 파일에 전반적인 함수의 실행 인자를 작성하는 방법이나 함수 실행시 `''`를 이용하여 대문자로 문자열 형식으로 작성하는 부분등이 달라서 에를 먹었었다.
  
  또 CSS가 전체적으로 내가 이해한 것들보다 훨씬 더 다양하게 작성되어 재미있었다.
  
  전체 정보를 js파일 하나로 저장한 뒤 페이지 에서 저장된 js파일을 임포트 해서 사용하니 vue 보다 사용이 더 간단하다는 생각도 들었다. 근데 한 페이지에 정보를 저장하기 위한 과정이 vue 보다는 복잡하여 몇번 더 실습을 해봐야 능숙하게 사용이 가능할 것 같다.
  
  이외에도 함수가 실행되는 부분이나 axios 요청을 보내는 부분등은 기존의 js 의 방식과 크게 다르지 않아서 어렵지 않게 작성할 수있었다.












