import React from 'react'

function Header({size,handleshow}) {
  return (
      <div className='flex shopping-card'>
          <div onClick={() => handleshow(false)} >Shopping Cart App</div>
          <div onClick={() => handleshow(true)}> Cart
              <sup> {size} </sup>
          </div>
      </div>
  );
}

export default Header;
