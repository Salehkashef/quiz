import Footer from "./combonent/Footer";
import Corses from "./combonent/Corses";
import Nav from "./combonent/Nav";
import React from "react";
import Home from "./combonent/Home";
import Corsdetels from "./combonent/Corsdetels";
import { Route, Router, Routes } from "react-router-dom";
import RegisterForm from "./combonent/Register";
import LoginForm from "./combonent/Login";
// import Checkoutbox from "./combonent/Checkoutbox";
import AllCousres from "./combonent/AllCousres";
import CategoryCourse from "./combonent/CategoryCourse";
import INSTRUCTOR from "./combonent/Instructor";
// import CheckoutForm from "./combonent/CheckoutForm";
import Checkout from "./combonent/Checkout";
import CourseView from "./combonent/CourseView";
import Questions from "./combonent/Questions";
import UserInfo from "./combonent/Userinfo";
import SideNav2 from "./combonent/SideNav2";
import UserProfile from "./combonent/UserProfile";


function App() {
  return (
    <>
      <React.Fragment>
        <Nav />
        <Routes>
          <Route path="/instructor" element={<INSTRUCTOR />} />
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Corsdetels />} />
          <Route path="/corses" element={<Corses />} />
          <Route path="/log" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* <Route path="/checkout" element={<Checkoutbox />} /> */}
          <Route path="/Allcourses" element={<AllCousres />} />
          <Route path="/category" element={<CategoryCourse />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/CourseView" element={<CourseView />} />
          <Route path="/Quiz" element={<Questions />} />
          <Route path="/user-peofile" element={<UserProfile />} />
        </Routes>

        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;
