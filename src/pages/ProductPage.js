import React from 'react'
import { HomePageProducts } from '../components/product'
import { Sidebar } from '../components/sidebar/Sidebar'
import { styled,Box } from '@mui/material'


export const ProductPage = () => {
    const StyledContentContainer=styled(Box)(() => ({
         padding:"20px",
         marginLeft:"255px",
  
         minHeight:"100vh",
        
         
        }));
  return (
    <div className='productPage'>


        <StyledContentContainer>
        <Sidebar></Sidebar>
      <HomePageProducts></HomePageProducts>
    
        </StyledContentContainer>
    
    </div>
  )
}
