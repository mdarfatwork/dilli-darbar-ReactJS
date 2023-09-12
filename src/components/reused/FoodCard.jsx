import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const FoodCard = ({ photo, name, price, id }) => {
  // console.log(name + ':' + id)
  const convertToSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-');
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // Dispatch the addToCart action with the correct item data
    dispatch(
      addToCart({
        id, // You should include a unique identifier for the item
        photo,
        name,
        price,
        quantity: 1, // You can set the initial quantity to 1
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center py-4 hover:shadow-lg hover:shadow-red-100 border-[0.5px] border-red-300 sm:border-red-100 rounded w-full gap-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Link to={`/food/${convertToSlug(name)}`} onClick={handleClick}>
        <img
          className="w-32 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src={photo}
          alt={name}
        />
      </Link>
      <Link to={`/food/${convertToSlug(name)}`} onClick={handleClick}>
        <h4>{name}</h4>
      </Link>
      <div className="flex justify-between w-[80%]">
        <span className="text-red-500 font-bold text-xl">₹{price}</span>
        <div
          className="bg-red-500 text-white py-1 px-3 rounded"
          onClick={addToCartHandler}
        >
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
