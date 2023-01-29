import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { instance } from "./application";
import { Header } from "./components/header";
import {RoutesComponent  } from "./Routes";
import './App.css';

import { SliderComp } from "./application/Carousel";
import { HomePage } from "./pages";
import { RegisterPage } from "./pages";
import { useDispatch } from "react-redux";
import { fetchCart, useUserInfo } from "./redux";
import { fetchHomePageProducts } from "./redux/slices/productSlice";
import { Sidebar } from "./components/sidebar/Sidebar";
import { BlogPage } from "./pages/BlogPage";
import { ProductPage } from "./pages/ProductPage";
import { RegisterForm } from "./components/register";
import { HomePageProducts } from "./components/product";
import { LoginForm } from "./components/login";
import { FooterPage } from "./pages/FooterPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logo } from "./components/header/Logo";
import { Gallery } from "./components/Gallery";





const StyledContentContainer=styled(Box)(() => ({

 minHeight:"100vh",

 
}));

const App = () => {

const dispatch=useDispatch();
const userInfo=useUserInfo();
useEffect(()=>{
  dispatch(fetchHomePageProducts());
 if(userInfo){
  dispatch(fetchCart(userInfo._id))
 }
},[]);
  return (
    <div className="App">
<Box >



<Header/>

<StyledContentContainer>



<RoutesComponent/>
</StyledContentContainer>

<BlogPage/>

<div className="hmproducts">

<Gallery/>
<Logo />
 


</div>
<FooterPage/>  



</Box>
</div>
    
  );
};




export default App;