import { useEffect, useState } from 'react';
import './App.css';
import Cart from './views/cart';
import MyCourse from './views/myCourse';
import Main from './views/main/main';
import List from './views/list';
import MyProfile from './views/myProfile';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import FindId from './views/FindId/index';
import IndexModule from './views/FindId/indexModal';
import FindPassword from './views/FindPassword';
import ChangePassword from './views/FindPassword/index2';
import ReviewList from './views/detail/content3/ReviewList';
import Main5 from './views/detail/detail';
import Logo from './asset/images/logo.png';
import DropButton from './views/main/DropButton'
import Header from './views/main/Header';
import WriteReview from './views/detail/board/boardWrite';
import UpdateReview from './views/detail/board/updateWrite';
import Footer from './views/main/Footer';
import Login from './views/login';
import IndexModal from './views/FindId/indexModal';
import Signup from './views/signup';

function App() {

  return (

    // <Main5/>
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="cart" element={<Cart />} />
          <Route path="list" element={<List />} />
          <Route path="main5" element={<Main5 />} />
          <Route path="findID" element={<FindId />} />
          <Route path="findPassword" element={<FindPassword />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="writeReview" element={<WriteReview/>}/>
          <Route path="updateReview" element={<UpdateReview/>}/>
          <Route path="indexModal" element={<IndexModal />}/>
          <Route path="signup" element={<Signup />}/>
        </Route>
      </Routes>
    </div>

  );
}

function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? 'enable-scroll' : ''}>
      <Login open={open} setOpen={setOpen} />
      <Header setOpen={setOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
