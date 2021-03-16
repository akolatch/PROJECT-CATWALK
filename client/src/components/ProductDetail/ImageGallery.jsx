import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import Fade from '@material-ui/core/Fade';
import { Modal } from '@material-ui/core';
import ScrollButton from './ScrollButton.jsx';
import ThumbGallery from '../../containers/productDetails/ThumbGalleryContainer.js';
import ViewButton from './ViewButton.jsx';

const ImageGallery = ({
  currentImage,
  currentImageIndex,
  selectImage,
  thumbGallery,
}) => {
  const [Open, setOpen] = useState(false);

  const scroll = (direction) => {
    const newIndex = currentImageIndex + direction;
    selectImage(thumbGallery[newIndex].url, newIndex);
  };

  return (
    <div className='image-gallery'>
      <div className='current-image-container'>
        <div
          onClick={() => setOpen(true)}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            className='main-image'
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
          ></div>
        </div>
      </div>
      <ThumbGallery />
      <ViewButton
        classList='expand-btn btn'
        handleClick={() => setOpen(true)}
      />
      <ScrollButton
        classList='left-btn carousel-btn btn'
        direction={-1}
        disabled={currentImageIndex === 0}
        label='left'
        path='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
        scroll={scroll}
        size={25}
      />
      <ScrollButton
        classList='right-btn carousel-btn btn'
        direction={1}
        disabled={currentImageIndex === thumbGallery.length - 1}
        label='right'
        path='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
        scroll={scroll}
        size={25}
      />
      <Modal open={Open} onClose={() => setOpen(false)}>
        <Fade in={Open}>
          <div className='image-modal'>
            <ScrollButton
              classList='carousel-btn btn zoom-left-btn'
              direction={-1}
              disabled={currentImageIndex === 0}
              label='left'
              path='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
              scroll={scroll}
              size={25}
            />
            <ScrollButton
              classList='zoom-right-btn carousel-btn btn'
              direction={1}
              disabled={currentImageIndex === thumbGallery.length - 1}
              label='right'
              path='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
              scroll={scroll}
              size={25}
            />
            <InnerImageZoom src={currentImage} zoomScale={2.5} sizes='60vh' />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageGallery;
