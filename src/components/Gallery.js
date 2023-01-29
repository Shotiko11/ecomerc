import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const Gallery = () => {


    const itemData = [
        {
          img: '',
          title: 'mercedes',
        },
        {
          img: '',
          title: 'BMW',
        },
        {
          img: '',
          title: '05',
        },
        {
          img: '',
          title: 'samag',
        },
        
        {
            img: '',
            title: 'laugh',
          },
          {
            img: '',
            title: 'FFF',
          },
        
        {
          img: '',
          title: 'blinkers',
        },
        {
          img: '',
          title: 'GTR',
        },
        {
          img: '',
          title: 'a car',
        },
        {
          img: '',
          title: 'candy',
        },
       
      ];











 
    return (
        <Box sx={{ width:1200, height: 750, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={4} gap={10}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      );
    }
  

