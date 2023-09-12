import React, { useEffect, useState } from "react";
import { hamburger, pizza, bread } from '../../assets/fake-data/images'
import products from '../../assets/fake-data/products'
import FoodCard from '../reused/FoodCard';

const Popularfood = () => {
  const [activeItem, setActiveItem] = useState('All');
  const [menuData, setMenuData] = useState([]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    if (activeItem === 'All') {
      setMenuData(products);
    } else {
      const filteredData = products.filter(item => item.category === activeItem);
      setMenuData(filteredData);
    }
  }, [activeItem]);

  return (
    <div className='w-[90%] 2xl:w-[65%] mx-auto'>
      <h1 className='text-3xl md:text-4xl text-center font-black text-[#212245] mb-10'>Popular Foods</h1>
      <div className="w-full bg-red-600 rounded-md flex justify-center py-3 md:py-5 gap-3 md:gap-6">
        <div className={`${activeItem === 'All' ? 'bg-white text-red-600' : 'text-white' } rounded-md py-1 px-2 font-extralight cursor-pointer`} onClick={() => handleItemClick('All')} >All</div>
        <div className={`${activeItem === 'Burger' ? 'bg-white text-red-600' : 'text-white' } rounded-md py-1 px-2 font-extralight cursor-pointer flex gap-2 items-center`} onClick={() => handleItemClick('Burger')}>
          <img className='w-6' src={hamburger} alt="" />
          <p>Burger</p>
        </div>
        <div className={`${activeItem === 'Pizza' ? 'bg-white text-red-600' : 'text-white' } rounded-md py-1 px-2 font-extralight cursor-pointer flex gap-2 items-center`} onClick={() => handleItemClick('Pizza')}>
          <img className='w-6' src={pizza} alt="" />
          <p>Pizza</p>
        </div>
        <div className={`${activeItem === 'Bread' ? 'bg-white text-red-600' : 'text-white' } rounded-md py-1 px-2 font-extralight cursor-pointer flex gap-1 items-center`} onClick={() => handleItemClick('Bread')}>
          <img className='w-6' src={bread} alt="" />
          <p>Bread</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {menuData.map((item) => (
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
  );
}

export default Popularfood;
