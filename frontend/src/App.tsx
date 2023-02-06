import { useEffect, useState } from 'react';
import './App.css';
import Cart from './views/cart';
import MyCourse from './views/MyPage/myCourse';
import Main from './views/main/main';
import List from './views/list';
import MyProfile from './views/MyPage/myProfile';
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import FindId from './views/FindId/index';
import FindPassword from './views/FindPassword';
import Main5 from './views/detail/detail';
import Header from './views/main/Header';
import WriteReview from './views/detail/board/boardWrite';
import UpdateReview from './views/detail/board/updateWrite';
import Footer from './views/main/Footer';
import Login from './views/login';
import IndexModal from './views/FindId/indexModal';
import Signup from './views/signup';
import OrderList from './views/orderList';

function App() {

  return (

    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="cart" element={<Cart />} />
          <Route path="list/:getcategory" element={<List />} />
          <Route path="main5/:idClass" element={<Main5 />} />
          <Route path="findID" element={<FindId />} />
          <Route path="findPassword" element={<FindPassword />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="writeReview/:idClass" element={<WriteReview/>}/>
          <Route path="updateReview/:idClass/:idReview" element={<UpdateReview/>}/>
          <Route path="indexModal" element={<IndexModal />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="myCourse" element={<MyCourse />}/>
          <Route path="orderList" element={<OrderList/>}/>
        </Route>
      </Routes>
    </div>

  );
}

function Layout() {
  const [open, setOpen] = useState(false);

  const {email} = useParams<string>();
  return (
    <div className={open ? 'enable-scroll' : ''}>
      <Login open={open} setOpen={setOpen} />
      <Header email={email} setOpen={setOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;