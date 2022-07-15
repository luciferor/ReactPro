import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Layout from './pages/layout';
import Index from './pages/index';
import Login from './pages/login';
import Test from './pages/test';
import Error from './pages/error';
// import Loading from './components/Loading';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index/>}></Route>
            <Route path="/test" element={<Test/>}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Loading/> */}
    </>
  );
}

export default App;
