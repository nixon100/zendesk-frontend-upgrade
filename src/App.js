import logo from "./logo.svg";
import "./App.css";
import "./css/class.css";
import "./css/navSide.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import TaskPage from "./pages/TaskPage";
import "./css/taskPage.css";
import SplitTask from "./components/SplitTask";
import Webcode from "./pages/Webcode";
import SplitWebcode from "./components/SplitWebcode";
import CapstonePage from "./pages/CapstonePage";
import SplitCapstone from "./components/SplitCapstone";
import Dashboard from "./pages/Dashboard";
import MockInterview from "./components/MockInterview";
import Class from "./pages/Class.js";
import Layout from "./pages/Layout.js";
import Nopage from "./pages/Nopage.js";
import Profile from "./pages/Profile.js";
import LoginPage from "./pages/LoginPage.js";
import Registration from "./pages/Registration.js";
import ForgetPassword from "./pages/Forget-password.js";
import NewPassword from "./pages/NewPassword.js";
import Email from "./pages/Email.js";
import CreatePassword from "./pages/CreatePassword.js";
import { useNavigate } from "react-router-dom";
function App() {
  const [id, seId] = useState("");
  const [token, setToken] = useState("");
  const [conf,setConfic] =useState(false);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Class />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="webcode" element={<Webcode />} />
          <Route path="capstone" element={<CapstonePage />} />
          <Route path="/student/profile" element={<Profile />} />

          {/* <Route path='devops' element={<DevOps/>}/>
      <Route path='digitalmarketing' element={<DigitalMarketing/>}/>
      <Route path='fullstackdevelopment' element={<FullStackDevelopment/>}/> */}
          <Route path="*" element={<Nopage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="forgot-password" element={<Email />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="reset-password/:id/:token" element={<NewPassword />} />
        <Route path="/password-confirmation" element={<CreatePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import "./css/class.css";
// import "./css/navSide.css";
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// import TaskPage from "./pages/TaskPage"
// import "./css/taskPage.css"
// import SplitTask from "./components/SplitTask";
// import Webcode from "./pages/Webcode";
// import SplitWebcode from "./components/SplitWebcode";
// import CapstonePage from "./pages/CapstonePage";
// import SplitCapstone from "./components/SplitCapstone";
// import Dashboard from "./pages/Dashboard";
// import MockInterview from "./components/MockInterview";
// import Class from "./pages/Class.js";
// import Layout from "./pages/Layout.js";
// import Nopage from "./pages/Nopage.js";
// import Profile from "./pages/Profile.js";
// import LoginPage from "./pages/LoginPage.js";
// import Registration from "./pages/Registration.js";
// import ForgetPassword from "./pages/Forget-password.js"
// import NewPassword from "./pages/NewPassword.js"
// import Email from "./pages/Email.js"
// import CreatePassword from "./pages/CreatePassword.js";

// function App() {
//   const [id, setId] = useState("");
//   const [token, setToken] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const currentUrl = window.location.href;
//     const urlParts = currentUrl.split('/');
//     const tokenFromUrl = urlParts[urlParts.length - 1];

//     if (!tokenFromUrl) {
//       navigate('/login', { replace: true });
//     } else {
//       setToken(tokenFromUrl);
//     }
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Class/>}/>
//           <Route path='dashboard' element={<Dashboard/>}/>
//           <Route path='tasks' element={<TaskPage/>}/>
//           <Route path='webcode' element={<Webcode/>}/>
//           <Route path='capstone' element={<CapstonePage/>}/>
//           <Route path='/student/profile' element={<Profile/>}/>

//           {/* <Route path='devops' element={<DevOps/>}/>
//           <Route path='digitalmarketing' element={<DigitalMarketing/>}/>
//           <Route path='fullstackdevelopment' element={<FullStackDevelopment/>}/> */}
//           <Route path='*' element={<Nopage/>}/>

//         </Route>
//         <Route path='login' element={<LoginPage/>}/>
//         <Route path='registration' element={<Registration/>}/>
//         <Route path='forgot-password' element={<Email/>}/>
//         <Route path='new-password' element={<NewPassword/>}/>
//         <Route path='reset-password/:id/:token' element={<NewPassword/>}/>
//         <Route path='/password-confirmation' element={<CreatePassword/>}/>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
