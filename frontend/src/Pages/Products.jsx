import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';

const Products = () => {
  const { products , search , showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
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
  if (!products || !Array.isArray(products)) return; // ✅ Prevent error

  let filtered = products.filter(item => item.newRelease === false); // Only show non-new releases

  if (showSearch && search) {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category.length > 0) {
    filtered = filtered.filter(item => category.includes(item.category));
  }

  if (subCategory.length > 0) {
    filtered = filtered.filter(item => subCategory.includes(item.subCategory));
  }

  setFilterProducts(filtered);
};


const sortProduct = () => {

   let fpCopy = filterProducts.slice();

   switch (sortType) {

    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
      break;
   
    case 'high-low':
      setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
      break;
   
    default:
      applyFilter();
      break;
    
    }
}

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search, showSearch]);

useEffect(()=>{
    sortProduct();
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
              <input className='w-3' type="checkbox" value="Work Books" onChange={toggleCategory} /> Work Books
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Writing Books" onChange={toggleCategory} /> Writing Books
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Papers" onChange={toggleCategory} /> Papers
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Stationary" onChange={toggleCategory} /> Stationary
            </label>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>GRADES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Grade 01 - Grade 05" onChange={toggleSubCategory} /> Grade 01 - Grade 05
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Grade 06 - Grade 09" onChange={toggleSubCategory} /> Grade 06 - Grade 09
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="O/L" onChange={toggleSubCategory} /> O/L
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="A/L" onChange={toggleSubCategory} /> A/L
            </label>
          </div>
        </div>
      </div>

      {/* Products Display Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          {/* Sort (non-functional placeholder) */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Price Low-High</option>
            <option value="high-low">Sort by: Price High-Low </option>
          </select>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            )) ) : (
            <p>No products found matching your filters.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default Products;




