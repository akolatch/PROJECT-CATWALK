import React from 'react';
import Scrollspy from 'react-scrollspy';
import StarRating from '../RatingsReviews/ProductRatings/StarRatingReadOnly';

const ProductInfo = ({
  currentProduct,
  currentStyle,
  productAvgStarRating,
}) => (
  <div className='product-info'>
    <div className='rating-container'>
      <StarRating productAvgStarRating={productAvgStarRating} />
      <Scrollspy items={['rContainer']}>
        <li style={{ listStyleType: 'none' }}>
          <a className='answerBody to-review' href='#rContainer'>
            Read all reviews
          </a>
        </li>
      </Scrollspy>
    </div>
    <div className='category answerBody'>
      CATEGORY: {currentProduct.category}
    </div>
    <div className='product-name'>{currentProduct.name}</div>
    <div className='price-container'>
      {currentStyle.sale_price ? (
        <div className='prices'>
          <div className='answerBody sales-price'>
            ${currentStyle.sale_price}
          </div>
          <div className='answerBody on-sale'>
            ${currentStyle.original_price}
          </div>
        </div>
      ) : (
        <div className='answerBody prices'>${currentStyle.original_price}</div>
      )}
    </div>
  </div>
);

export default ProductInfo;
