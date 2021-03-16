import React, { useState } from 'react';
import Favorite from './FavoriteBtn';

const InStock = ({
  checkout,
  currentSku,
  currentStyle,
  favorite,
  sizeChange,
}) => {
  const [sizeNotSelected, setSizeNotSelected] = useState(false);

  const skus = (() =>
    currentStyle.hasOwnProperty('skus')
      ? Object.entries(currentStyle.skus)
      : [])();

  const submitToCart = (e) => {
    e.preventDefault();
    if (currentSku === '') {
      setSizeNotSelected(true);
    } else {
      if (sizeNotSelected) {
        setSizeNotSelected(false);
      }
      checkout(skus[currentSku][0]);
    }
  };
  const quantities = (() => {
    if (currentSku !== '') {
      const range = Math.min(skus[parseInt(currentSku, 10)][1].quantity, 15);
      const quantities = [];
      for (let amount = 1; amount <= range; amount++) {
        quantities.push(amount);
      }
      return quantities;
    }
  })();

  return (
    <form action=''>
      <select
        aria-label='size selector'
        className='checkout-form-item size-select'
        name='size'
        onChange={sizeChange}
      >
        <option value=''>SELECT SIZE</option>
        {currentStyle.hasOwnProperty('skus')
          ? skus.map((sku, i) =>
              sku[1].quantity > 0 ? (
                <option key={sku[0]} value={i}>
                  {sku[1].size}
                </option>
              ) : null
            )
          : null}
      </select>
      {currentSku === '' ? (
        <select
          aria-label='quantity selector'
          className='quantity checkout-form-item'
          disabled
          name='quantity'
        >
          <option value=''>-</option>
        </select>
      ) : (
        <select
          aria-label='quantity selector'
          className='quantity checkout-form-item'
          name='quantity'
        >
          {quantities.map((amount) => (
            <option key={amount} value={amount}>
              {amount}
            </option>
          ))}
        </select>
      )}
      {sizeNotSelected ? <div>Please select size</div> : null}
      <input
        aria-label='Add to Bag'
        className='checkout-form-item'
        onClick={submitToCart}
        type='submit'
        value='ADD TO BAG                    +'
      />
      <Favorite favorite={favorite} />
    </form>
  );
};

export default InStock;
