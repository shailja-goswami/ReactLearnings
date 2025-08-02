// import './App.css'
// import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
// import Dashboard from './components/Dashboard';
// import About from './components/About';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// const router=createBrowserRouter(
// [
//   {
//     path:"/",
//     element:<div>
//       <Navbar />
//       <Home />
//     </div>
//   },
//   {
//      path:"/about",
//     element:<div>
//       <Navbar />
//       <About />
//     </div>
//   },
//   {
//      path:"/dashboard",
//     element:<div>
//       <Navbar />
//       <Dashboard />
//     </div>
//   }
// ]
// )
// function App() {

//   return (
    
//       <div>
//        <RouterProvider router={router} />
//       </div>
//       // <BrowserRouter>
//       // <Routes>
//       //   <Route path='/' element={<Home/>}/>
//       //   <Route path='/about' element={ <div><Dashboard/> <Home/></div>}/>
//       //   <Route 
//       //   path='/dashboard' 
//       //   element={<div>
//       //     <Home/> 
//       //     <About/>
//       //     </div>} />
//       // </Routes>
//       // </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <Navbar />
              <Dashboard />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

