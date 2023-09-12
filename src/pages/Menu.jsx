import React, { useEffect, useState } from 'react';
import BgHeader from '../components/reused/BgHeader';
import { AiOutlineSearch } from 'react-icons/ai';
import FoodCard from '../components/reused/FoodCard';
import products from '../assets/fake-data/products';

const Menu = () => {
  const options = [
    { value: 'default', label: 'Default' },
    { value: 'low', label: 'Low to High' },
    { value: 'high', label: 'High to Low' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [menuData, setMenuData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Sort the products based on the selected option
    let sortedProducts = [...products];

    if (selectedOption === 'low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedOption === 'high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setMenuData(sortedProducts);
    document.title = "Menu - Dilli Darbar";
  }, [selectedOption]);

  // Filter menu items based on search query
  const filteredItems = menuData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='pt-20 md:pt-28'>
      <BgHeader data='All Foods' />
      <div className='py-12 w-[90%] 2xl:w-[65%] mx-auto'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex-1 border-[0.5px] border-red-300 sm:border-red-100 rounded p-2 flex justify-between items-center'>
            <input
              className='w-full outline-none'
              type='text'
              placeholder={`I'm Looking for...`}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className='text-xl'>
              <AiOutlineSearch />
            </span>
          </div>
          <div className='flex-1 flex justify-end'>
            <select
              id='dropdown'
              className='w-[50%] p-2 border border-red-100 rounded-md'
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='w-[90%] 2xl:w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4 mb-10'>
        {filteredItems.map((item) => (
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
};

export default Menu;
