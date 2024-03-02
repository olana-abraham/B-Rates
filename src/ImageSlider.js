import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';


const slideImages = [
  {
    url: 'https://uclaonthehill.files.wordpress.com/2015/04/ja1a0258.jpg?w=820&h=312&crop=1',
    caption: 'Welcome to B-Rate'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  }
];

function ImageSlider() {
    return (
        <div className='slide-container'>
          <Fade>
            {slideImages.map((image, index) => (
              <div key={index} className='slide-image'>
                <div className='image-container' style={{backgroundImage: `url(${image.url})`}}>
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
