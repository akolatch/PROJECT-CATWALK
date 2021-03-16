import React, { useState } from 'react';
import ThumbCard from './ThumbCard.jsx';
import ArrowButton from './ScrollButton.jsx';

const ThumbGallery = ({ thumbGallery, selectImage, currentImageIndex }) => {
  let cardContainer = null;
  const [imageIndex, setImageIndex] = useState(currentImageIndex);

  const scroll = (direction) => {
    const nextIndex = imageIndex + direction;
    cardContainer.style.transitionDuration = '0.5s';
    cardContainer.style.transform = `translateY(-${89 * nextIndex}px)`;
    setImageIndex(nextIndex);
  };

  return (
    <div>
      {thumbGallery.length > 6 ? (
        <div className='thumb-gallery'>
          <ArrowButton
            classList='up-down-btn'
            direction={-1}
            disabled={imageIndex === 0}
            label='up'
            path='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
            scroll={scroll}
            size={16}
          />
          <div className='gallery-port'>
            <div
              ref={(element) => (cardContainer = element)}
              className='gallery-card'
            >
              {thumbGallery.map((pic, i) => (
                <ThumbCard
                  selectImage={selectImage}
                  index={i}
                  key={`${i} ${pic.url.slice(34)}`}
                  photo={pic}
                />
              ))}
            </div>
          </div>
          <ArrowButton
            classList='up-down-btn'
            direction={1}
            disabled={imageIndex === thumbGallery.length - 6}
            label='down'
            path='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
            scroll={scroll}
            size={16}
          />
        </div>
      ) : (
        <div className='thumb-gallery'>
          {thumbGallery.map((pic, i) => (
            <ThumbCard
              selectImage={selectImage}
              index={i}
              key={`${i} ${pic.url.slice(34)}`}
              photo={pic}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default ThumbGallery;
