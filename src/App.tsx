import React from 'react';
import './App.css';
import Cart from './views/cart';
import MyCourse from './views/myCourse';
import Main from './views/main/main';
import List from './views/list';
import MyProfile from './views/myProfile';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import FindId from './views/FindId/index';
import IndexModule from './views/FindId/indexModule';
import FindPassword from './views/FindPassword';
import ChangePassword from './views/FindPassword/index2';

function App() {
  return (

    <Main/>
    // <div>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Main />} />
    //       <Route path="cart" element={<Cart />} />
    //       <Route path="dashboard" element={<Dashboard />} />

    //       {/* Using path="*"" means "match anything", so this route
    //             acts like a catch-all for URLs that we don't have explicit
    //             routes for. */}
    //       <Route path="*" element={<NoMatch />} />
    //     </Route>
    //   </Routes>
    // </div>

    
  );
}

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/cart">Cart</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

export default App;
