import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './page/HomePage';
import ReactQueryPage from './page/ReactQueryPage';
import NormalPage from './page/NomalPage';

function App() {
  return (
    <div >
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          HomePage
        </Link>
        <Link to="/normal" style={{ marginRight: "10px" }}>
          NormalPage
        </Link>
        <Link to="/react-query" style={{ marginRight: "10px" }}>
          react-query
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/normal' element={<NormalPage />}></Route>
        <Route path='/react-query' element={<ReactQueryPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
