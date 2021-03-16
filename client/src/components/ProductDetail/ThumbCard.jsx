import React from 'react';
const ThumbCard = ({ selectImage, index, photo }) => {
  console.log(photo.url);
  return (
    <button
      aria-label={index}
      onClick={(e) => {
        selectImage(e.target.value, index);
      }}
      value={photo.url}
      className='thumbnail thumb-square'
      style={{
        backgroundImage: `url(${photo.thumbnail_url})`,
      }}
    ></button>
  );
};

export default ThumbCard;
