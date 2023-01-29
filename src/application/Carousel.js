import React, { useEffect } from 'react';
import '../App.css';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useHomePageProducts } from '../redux';
import { Button ,Box} from '@mui/material';
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import {MdOutlineArrowForwardIos} from "react-icons/md"



export const SliderComp=()=>{

const SliderData = [
       
         
        {
            Image:
            '',
            add:"NEED-IT-NOW",
            description:'contemporary,minimal, and beautifully iconic',
            title:"Start a day with coffee"
            
        },
        {
         

            Image:
            "",
            add:"dont miss today's featured deals",
            description:'here to bring your lifestyle to the next level',
            title:"Start a day with coffee"
        },
        {
           
            
            Image:
            'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2023/overview/cards/2023-nissan-gtr-solid-red-driving-on-track-overhead-view.jpg' ,

           
            
            add:"more month, more race ",
            description:'Have you ever driven a car?',
            title:"car the tilt"
        },
       
      ];



 const CarouselItem = ({children,width}) => {
  return (
    <div className="carousel-Item" style={{ width:width }}>
      {children}
    </div>
  );
};

 const Carousel=({children,Image,description,add,title})=>{
    const [activeIndex,setActiveIndex]=useState(0);
    const [paused,SetPaused]=useState(false);
    const updateIndex=(newIndex)=>{
        if(newIndex<0){
            newIndex=React.Children.count(children)-1;
        } else if (newIndex>= React.Children.count(children)){
            newIndex=0;
        }

        setActiveIndex(newIndex);
    };
    useEffect(()=>{
       
        const interval=setInterval(()=>{
            if(!paused){
                updateIndex(activeIndex+1);
            }
            
        },2000);
       
        return()=>{
            if(interval){
                clearInterval(interval);
            }
        };
    });
    const handlers=useSwipeable({
        onSwipedLeft:()=>updateIndex(activeIndex+1),
        onSwipedRight:()=>updateIndex(activeIndex-1)
    });
    return (
        {...handlers},
        <div className="carousel"
        onMouseEnter={()=>SetPaused(true)}
        onMouseLeave={()=>SetPaused(false)}  >
            <div className="inner"  style={{ transform: `translateX(-${activeIndex*100}%)` }}>
                {React.Children.map(children, (child,index)=>{
                    return React.cloneElement(child,{width:"100%"});
                })}

            </div>

            <div className="indicators">
                <button onClick={()=>{updateIndex(activeIndex-1)}}>
                    <MdOutlineArrowBackIosNew/>
                </button>

                {React.Children.map(children,(child,index)=>{
                    return(
                        <button className={`${index===activeIndex ? "active" : ""}`}
                        
                        onClick={()=>{
                            updateIndex(index);
                        }}>
                            {/* {index + 1} */}
                             </button>
                    )
                })}

                <button onClick={()=>{updateIndex(activeIndex+1)}}>
                   <MdOutlineArrowForwardIos/>
                </button>
            </div>

        </div>
    )

} 
return(

<Carousel >
 {SliderData.map((item)=>{ return <CarouselItem>  <Box sliderImg> <img className='sliderImg' src={item.Image} alt={` ${item.description}`}  ></img></Box>
 <span className='sliderDescription'>{item.description}</span>
 <span className=' slideradd'> {item.add}</span>
 <span className='slidertitle'> {item.title}</span>
 
 </CarouselItem>})}


</Carousel>


)

}