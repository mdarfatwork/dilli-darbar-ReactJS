import React, { useEffect, useState } from "react";
import FoodCard from '../reused/FoodCard'
import products from '../../assets/fake-data/products'

const HotPizza = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(products);
  }, []);

  const displayedMenuData = menuData
    .filter((item) => item.category === 'Pizza')
    .slice(0, 4); // Display only the first 4 items

  return (
    <div className='w-[90%] 2xl:w-[65%] mx-auto'>
        <h1 className='text-3xl md:text-4xl text-center font-black text-[#212245] mb-10'>Hot Pizza</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {displayedMenuData.map((item) => (
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
  )
}

export default HotPizza;