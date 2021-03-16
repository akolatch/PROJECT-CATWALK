import React from 'react';
import Favorite from './FavoriteBtn';

const OutOfStock = ({ favorite }) => (
  <div className='add-cart'>
    <form>
      <select className='checkout-form-item size-select' disabled name='size'>
        <option value=''>OUT OF STOCK</option>
      </select>
      <select className='quantity checkout-form-item' disabled name='quantity'>
        <option value=''>-</option>
      </select>
      <Favorite favorite={favorite} />
    </form>
  </div>
);

export default OutOfStock;
