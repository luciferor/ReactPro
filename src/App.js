import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Layout from './pages/layout';
import Index from './pages/index';
import Login from './pages/login';
import Test from './pages/test';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
