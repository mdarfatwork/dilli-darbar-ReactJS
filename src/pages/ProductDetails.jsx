import React, { useEffect, useState } from 'react';
import products from '../assets/fake-data/products';
import BgHeader from '../components/reused/BgHeader';
import FoodCard from '../components/reused/FoodCard';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


const ProductDetails = ({name, image01, image02, image03, desc, category, price, id, photo}) => {
  console.log(name + ':' + id)
  const thumbnailImages = [
    `${image01}`,
    `${image02}`,
    `${image03}`,
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [menuData, setMenuData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Function to handle incrementing the quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decrementing the quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  useEffect(() => {
      setMenuData(products);
      document.title = `${name} - Dilli Darbar`;
  }, [name]);

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
    <div className='pt-20 md:pt-28'>
      <BgHeader data={name} />
      <div className="py-10 w-[90%] 2xl:w-[65%] mx-auto">
        {/* item photo and name etc */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[20%] flex flex-row md:flex-col justify-between cursor-pointer">
            {thumbnailImages.map((image, index) => (
                <img
                  key={index}
                  className={`w-24 h-auto`}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="w-full md:w-[80%]">
            <img
                className='w-full md:w-[90%] lg:w-[80%]'
                src={thumbnailImages[selectedImage]}
                alt={`Selected ${selectedImage}`}
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className='text-[#212245] text-2xl md:text-3xl font-bold'>{name}</h1>
            <div className="flex items-center text-red-500 gap-4 py-7">
              <span className='md:text-lg'>Price:</span>
              <span className='text-xl md:text-2xl font-bold'>₹{price}</span>
            </div>
            <div className="flex items-center gap-5 mb-6 md:mb-8">
              <span className='text-[#212245]'>Category:</span>
              <span className='bg-red-100 py-1 px-2 rounded'>{category}</span>
            </div>
            <div className="flex gap-2 mb-6 md:mb-8">
              <span className='flex justify-center items-center py-1 px-2 bg-gray-300 cursor-pointer' onClick={handleDecrement}><AiOutlineMinus/></span>
              <span className='flex justify-center items-center py-1 bg-gray-200 px-8'>{quantity}</span>
              <span className='flex justify-center items-center py-1 px-2 bg-gray-300 cursor-pointer' onClick={handleIncrement}><AiOutlinePlus/></span>
            </div>
            <span onClick={addToCartHandler} className="bg-red-500 text-white rounded py-2 px-4 text-sm cursor-pointer">Add to Cart</span>
          </div>
        </div>
        {/* description */}
        <div className="py-20 flex flex-col gap-5">
          <h3 className='text-lg text-red-500'>Descriptoin</h3>
          <hr className='border-[0.5px] border-red-200' />
          <p className='text-base text-gray-500 font-sans text-center md:text-left'>{desc}</p>
        </div>
        {/* You might also like */}
        <div>
          <h2 className='text-[#212245] text-xl md:text-2xl font-bold'>You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {menuData
          .filter((item) => (item.category === category))
          .map((item) => (
          <FoodCard
            key={item.id}
            id={item.id}
            photo={item.image01}
            name={item.title}
            price={item.price}
          />
        ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;