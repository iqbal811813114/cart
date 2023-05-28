import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Cart = ({cart}) => {
  const[CART,setCART]=useState([])

  useEffect(()=>{
    setCART(cart)
  },[cart])
  return (
    <div>
      {
        CART.map((items,crtind)=>{
          return (
            <>
            <span><img src={items.url} alt="" width={40} /></span>
            <span><button>-</button></span>
            <span>{items.quantity}</span>
            <span><button onClick={()=>{
              const _cart= CART.map((itm,index)=>{
                return crtind === index ? { ...itm,quantity: itm.quantity + 1} :itm
              })
              setCART(_cart)
            }}>+</button></span>
            <span>Rs.{items.price * items.quantity}</span>
            </>
          )
        })
        
      }
      <div>
        {
          CART.map((cartitem)=> cartitem.price * cartitem.quantity).reduce((total,value)=> total + value,0)
        }
      </div>
    </div>
  )
}

export default Cart
