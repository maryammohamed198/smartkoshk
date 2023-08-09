import React, { Profiler } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// import { products } from "./components/data";
import {productData} from "./data/Data";
// 
// import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Footer from "./Headers/Footer"
import Products from "./pages/Products"
import Log_in from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import { ShoppinghcartProvider } from "./componant/context/Context";
import Categories from "./componant/homecomp/Categories";
import Five from "./componant/homecomp/Slidercardsfive";
import Cart from "./pages/Cart";
import Wishcol from './componant/wishlistconp/Wishcol'
import MainNave from './Headers/MainNave'
import Viewproduct from "./componant/prudactcomp/Viewproduct";
import Profile from './componant/logscomp/Profile'
// import Test from "./componant/homecomp/test";
// import Test from './componant/homecomp/test'
function App() {
  return (
    <ShoppinghcartProvider className="App">

 
 {/*  <Categories></Categories>  */}
<MainNave></MainNave>
 <Router>
    <Routes>
   <Route path="/Viewproduct/:id" element={<Viewproduct productData={ productData } ></Viewproduct>} /> 
   <Route path="/Wishlist" element={<Wishlist />} /> 
   <Route path="/" element={<Home/>} /> 

         <Route path="/Products" element={<Products/>} /> 
         <Route path="/Profile" element={<Profile/>} /> 
      
        
</Routes> 
        
     </Router> 
     <Footer></Footer>
     
   </ShoppinghcartProvider>
  );
}

export default App;
