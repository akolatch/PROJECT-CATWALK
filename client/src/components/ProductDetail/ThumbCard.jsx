import React from 'react';
const ThumbCard = ({ index, photo, selectImage }) => (
  <button
    aria-label={index}
    className='thumbnail thumb-square'
    onClick={(e) => {
      selectImage(e.target.value, index);
    }}
    style={{
      backgroundImage: `url(${photo.thumbnail_url})`,
    }}
    value={photo.url}
  ></button>
);

export default ThumbCard;
