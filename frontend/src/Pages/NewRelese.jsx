import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';

const NewRelese = () => {

const { products , search , showSearch } = useContext(ShopContext);

  const [filterNewRelease, setFilterNewRelease] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType,setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value] );
   };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value] );
  };

 const applyFilter = () => {
  if (!products || !Array.isArray(products)) return; // ✅ Prevents crash

 let filtered = products.filter(item => item.newRelease === true);


  if (showSearch && search) {
    const lowerSearch = search.toLowerCase();

    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(lowerSearch) ||
      item.author?.toLowerCase().includes(lowerSearch)
    );
  }

  if (category.length > 0 && subCategory.length === 0) {
  filtered = filtered.filter(item =>
    category.includes(item.category?.toLowerCase().trim())
  );
} else if (category.length > 0 && subCategory.length > 0) {
  filtered = filtered.filter(item =>
    category.includes(item.category?.toLowerCase().trim()) &&
    subCategory.includes(item.subCategory?.toLowerCase().trim())
  );
} else if (category.length === 0 && subCategory.length > 0) {
  filtered = filtered.filter(item =>
    subCategory.includes(item.subCategory?.toLowerCase().trim())
  );
}


  setFilterNewRelease(filtered);
};


const sortNewRelease = () => {

   let fpCopy = filterNewRelease.slice();

   switch (sortType) {

    case 'low-high':
      setFilterNewRelease(fpCopy.sort((a,b)=>(a.price - b.price)));
      break;
   
    case 'high-low':
      setFilterNewRelease(fpCopy.sort((a,b)=>(b.price - a.price)));
      break;
   
    default:
      applyFilter();
      break;
    
    }
}



  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products , search, showSearch]);


  useEffect(()=>{
      sortNewRelease();
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Sidebar */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="novels" onChange={toggleCategory} /> Novel
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="pariwarthana" onChange={toggleCategory} /> Pariwarthana
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="keti katha" onChange={toggleCategory} /> Keti Katha
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="children's story" onChange={toggleCategory} /> Children's Story
            </label>
          </div>
        </div>
        

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>LANGUAGES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="sinhala" onChange={toggleSubCategory} /> Sinhala
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="english" onChange={toggleSubCategory} /> English
            </label>
            
          </div>
        </div>
      
      </div>

      {/* Products Display Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          {/* Sort (non-functional placeholder) */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Price Low-High</option>
            <option value="high-low">Sort by: Price High-Low </option>
          </select>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterNewRelease.length > 0 ? (
            filterNewRelease.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} author={item.author} />
            )) ) : (
            <p>No products found matching your filters.</p>
            )}
        </div>
      </div>
    </div>
  );
};


export default NewRelese
