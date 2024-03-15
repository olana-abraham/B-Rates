import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import Navbar from "./Navbar"


const slideImages = [
  {
    url: 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20193/5cafc8662cfac23fe70d8f68_Kerkoff+Patio_02/Kerkoff+Patio_02_15040f23-9790-43a8-b4a9-a1e57912e8a3-prv.jpg',
  
  },
  {
    url: 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20193/5cafc40a2cfac23fe4039107_Court+of+Sciences_64/Court+of+Sciences_64_d5f3b649-45a1-497d-807b-f5b23ad4d8dd-prv.jpg',
  },
  {
    url: 'https://www.collegemagazine.com/wp-content/uploads/2023/08/IMG_3424.jpeg',
  }
];

function ImageSlider() {
  return (
      <div className='slide-container'>
        <Fade>
          {slideImages.map((image, index) => (
            <div key={index} className='slide-image'>
              <div className='image-container' style={{backgroundImage: `url(${image.url})`}}>
                  <div className='Nav'>
                
                  </div>
                  <div className='transparent-box'>
                    <span className='caption'>{image.caption}</span>
                  </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
  );
} 
  

export default ImageSlider;
