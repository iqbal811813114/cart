import React from 'react'

const Product = ({product,handleadd}) => {
  return (
    <div>
      {
        product.map((items)=>{
          return(
            <>
            <img src={items.url} alt="" />
            <p>{items.name} | {items.category}</p>
            <p>{items.seller}</p>
            <p>Rs.{items.price}</p>
            <button onClick={()=>handleadd(items)}>Add to cart</button>
            </>
          )
        })
      }
    </div>
  )
}

export default Product
