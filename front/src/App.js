import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main, Search, MyPage, MyNft, Signup, Login } from "./pages";
import {
  LoginMobile,
  MainMobile,
  MyNftMobile,
  MyPageMobile,
  SearchMobile,
  SignupMobile,
} from "./pagesmobile";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  // useEffect(() => {
  //   if (isMobile) {
  //     window.location.href =
  //       "https://metamask.app.link/dapp/zerohoney--dreamy-arithmetic-91f34a.netlify.app";
  //   }
  // });

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={isMobile ? <MainMobile /> : <Main />} />
        <Route
          path={"/search/case"}
          element={isMobile ? <SearchMobile /> : <Search />}
        />
        <Route
          path={"/mypage"}
          element={isMobile ? <MyPageMobile /> : <MyPage />}
        />
        <Route
          path={"/mynft"}
          element={isMobile ? <MyNftMobile /> : <MyNft />}
        />
        <Route
          path={"/signup"}
          element={isMobile ? <SignupMobile /> : <Signup />}
        />
        <Route
          path={"/login"}
          element={isMobile ? <LoginMobile /> : <Login />}
        />
      </Routes>
    </div>
  );
}
// bigint오류가 뜬다면 이것을 pacakge.json에 추가하자!!
// "browserslist": {
//   "production": [
//     "chrome >= 67",
//     "edge >= 79",
//     "firefox >= 68",
//     "opera >= 54",
//     "safari >= 14"
//   ],
//   "development": [
//     "last 1 chrome version",
//     "last 1 firefox version",
//     "last 1 safari version"
//   ]
// }

export default App;
