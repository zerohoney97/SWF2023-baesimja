import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Main, Search, MyPage, MyNft, Signup, Login } from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/search/case'} element={<Search />} />
        <Route path={'/mypage'} element={<MyPage />} />
        <Route path={'/mynft'} element={<MyNft />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
