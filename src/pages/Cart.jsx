import React, { useEffect } from 'react';
import BgHeader from '../components/reused/BgHeader';
import CartItem from '../components/cart/CartItem';
import { useSelector } from 'react-redux';
import {Link } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    document.title = "Cart - Dilli Darbar";
  }, [cart]);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='pt-20 md:pt-28'>
      <BgHeader data='Cart' />
      <div className="w-[90%] 2xl:w-[65%] mx-auto py-10 md:py-14">
        {cart.length === 0 ? (
          <div className="w-full text-center text-2xl md:py-4 2xl:py-14">Your Cart is Empty</div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-3">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                photo={item.photo}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        )}
        <div className="pt-8 sm:pt-12">
          <div className="text-base text-[#212245]">
            <span>Subtotal: ₹</span>
            <span className='text-3xl text-red-500'>{getTotal().totalPrice}</span>
          </div>
          <p className='text-sm text-[#212245] py-2'>Taxes and shipping will calculate at checkout</p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/menu">
            <span onClick={handleClick} className="text-white bg-red-500 rounded-md py-1 px-5 font-sans w-[60%] md:w-auto flex justify-center items-center">Continue Shopping</span>
            </Link>
            <Link to="/checkout">
            <span onClick={handleClick} className="text-white bg-red-500 rounded-md py-1 px-5 font-sans w-[60%] md:w-auto flex justify-center items-center">Proceed to checkout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;