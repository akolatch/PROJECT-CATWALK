import React from 'react';

import InStock from '../../containers/productDetails/InStockContainer.js';
import OutOfStock from './OutStock.jsx';
import SocialMediaTag from './SocialMediaTag.jsx';

const AddToCart = ({
  addToOutfitList,
  currentProduct,
  currentStyle,
  outfitList,
}) => {
  const favorite = (e) => {
    e.preventDefault();
    if (!outfitList.includes(currentProduct.id)) {
      addToOutfitList(currentProduct.id);
    }
  };
  return (
    <div className='add-cart'>
      {currentStyle.skus ? (
        <div>
          {currentStyle.skus.null ? (
            <OutOfStock favorite={favorite} />
          ) : (
            <InStock favorite={favorite} />
          )}
        </div>
      ) : null}

      <SocialMediaTag />
    </div>
  );
};

export default AddToCart;
