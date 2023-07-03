# Amazon 클론코딩 하면서 발생한 이슈들

### material-ui/icons 설치

버전이 맞지 않아서인지 설치오류가 계속남. 시키는대로 `--legacy-peer-deps`와 `--force`를 붙여보았지만 No modules 오류가 남. 검색해봐도 마땅한 해결방법이 없길래 다시 `--legacy-peer-deps`를 붙여 설치했더니 warning과 함께 설치가 됐고, 바로 연달아서 `npm start`를 했더니 정상적으로 서버가 켜짐. 그 후로도 됐다안됐다 반복

### ShoppingBasket 사용

영상에서는 따로 import를 하지 않아도 된다고 했지만 오류가 나길래 검색해본 결과

상단에 `import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'`를 적어줘야 하고, 본문에도 `<ShoppingBasket/>`이 아닌 `<ShoppingBasketIcon/>`라 적어줘야함

### home_image 100% 안참

100%를 했을 때 가로로 가득 차지 않음. 알고보니 내가 인터넷 창 배율을 90%로 하고있었고, 영상 속에서도 가득 차지 않았음. css 어느 부분에서 `max_width: 1500px`를 설정해놔서 그런거였음.

### react-router-dom 설치

`--legacy-peer-deps`를 붙여서 설치해도 계속해서 `could not resolve ~` 에러가 나면서 설치가 되지않음. 검색 결과 uninstall을 하고 다시 `--legacy-peer-deps`를 붙였더니 정상적으로 설치됨.

의문점) uninstall을 했을 때도 에러창이 뜬 걸로 보아 제대로 uninstall이 되지도 않았을텐데 어떻게 깔린거지..? 그전엔 legacy를 이용해도 설치되지 않던 게 왜 갑자기 됐던걸까?

### Switch <> Routes 변경 / 한 path에 여러개의 컴포넌트 넣기

react-router-dom이 v6으로 넘어가면서 기존에 사용하던 Switch가 Routes로 변경됨.

한 path에 여러개의 컴포넌트를 넣고싶을 땐 따로 두 줄을 적는게 아니라 두 개의 컴포넌트를 div로 묶은 다음 이를 한 element 안에다 넣어줘야함.

```javascript
// 업데이트 전
function App({ authService }) {
  return (  
   <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
   );
}
// 업데이트 후
function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login authService={authService} />}
          ></Route>
          <Route path="/maker" element={<Maker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

출처 : [Switch -> Routes 로 변경 (tistory.com)](https://firstlife-note.tistory.com/52)

### useHistory <> useNavigate

react-router-dom이 업뎃되면서 useHistory 대신 useNavigate를, history 대신 navigate를 사용해야 함.
