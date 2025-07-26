import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
  const [isNewRelease, setIsNewRelease] = useState(false);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('');
  const [grade, setGrade] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [image, setImage] = useState(null);
  const [publisher, setPublisher] = useState('');




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNewRelease && (!author || !isbn || !language)) {
  alert('Please fill in all required fields: Author, ISBN, and Language');
  return;
}


    const formData = new FormData();
    formData.append('isNewRelease', isNewRelease);
    formData.append('name', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', isNewRelease ? 'newrelease' : 'product'); 
    formData.append('subCategory', category);
    

    if (isNewRelease) {
      formData.append('language', language);
      formData.append('author', author);
      formData.append('isbn', isbn);
      formData.append('publisher', publisher);
    } else if (category === 'papers') {
      formData.append('grade', grade);
      
    }

    if (image) formData.append('image', image);

    


    const response = await axios .post(backendUrl + "/api/product/add",formData,{headers:{token}})

    if (response.data.success) {
        toast.success(response.data.message)
        setProductName('')
        setDescription('')
        setImage(null)
        setPrice('')
    } else {
        toast.error(response.data.message)
    }
    

    
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full item-start gap-4'>
      {/* Toggle New Release */}
      <div>
        <label className='flex items-center gap-2'>
          <input
            type="checkbox"
            checked={isNewRelease}
            onChange={(e) => {
              setIsNewRelease(e.target.checked);
              setCategory('');
              setLanguage('');
              setGrade('');
              setAuthor('');
              setIsbn('');
              setPublisher('');
            }}
          />
          <span>Is this a New Release ?</span>
        </label>
      </div>

      {/* Image Upload */}
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image">
            <img
              className='w-20 cursor-pointer'
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
            />
            <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
        </div>
      </div>

      {/* Product Name */}
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className='w-full max-w-[500px] px-3 py-2 border rounded'
          type="text"
          placeholder='Type here'
          required
        />
      </div>

      {/* Description */}
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full max-w-[500px] px-3 py-2 border rounded'
          placeholder='Write content here'
          required
        />
      </div>

       {/* Price  */}
      <div className='w-full'>
         <p className='mb-2'>Product Price (LKR)</p>
           <input  type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='w-full max-w-[500px] px-3 py-2 border rounded' placeholder='Enter price' required />
      </div>

      {/* Category */}
      <div>
        <p className='mb-2'>Category</p>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setGrade('');
            setLanguage('');
          }}
          className='px-3 py-2 border rounded'
          required
        >
          <option value="">Select Subcategory</option>
          {isNewRelease ? (
            <>
              <option value="novels">Novels</option>
              <option value="ketiKatha">Keti Katha</option>
              <option value="childrensStory">Childrens' Story</option>
               <option value="pariwarthana">Pariwarthana</option>
            </>
          ) : (
            <>
              <option value="papers">Papers</option>
              <option value="workBooks">Work books</option>
              <option value="writing_books">Writing Books</option>
              <option value="stationery">Stationery</option>
            </>
          )}
        </select>
      </div>
       


      {/* Author (New Release Only) */}
      {isNewRelease && category && (
        <>
          <div>
            <p className='mb-2'>Author</p>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='px-3 py-2 border rounded w-full max-w-[500px]'
              type="text"
              placeholder="Enter Author"
              required
            />
          </div>

          <div>
            <p className='mb-2'>ISBN</p>
            <input
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className='px-3 py-2 border rounded w-full max-w-[500px]'
              type="text"
              placeholder="Enter ISBN"
              required
            />
          </div>
        </>
      )}

       {/* Publisher (New Release Only) */}
      {isNewRelease && category && (
     <div>
    <p className='mb-2'>Publisher</p>
    <input
      value={publisher}
      onChange={(e) => setPublisher(e.target.value)}
      className='px-3 py-2 border rounded w-full max-w-[500px]'
      type="text"
      placeholder="Enter Publisher"
      required
    />
  </div>
)}

      {/* Language (New Release Only) */}
      {isNewRelease && category && (
        <div>
          <p className='mb-2'>Language</p>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='px-3 py-2 border rounded'
            required
          >
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="sinhala">Sinhala</option>
          </select>
        </div>
      )}
       


      {/* Grade (for Papers Only) */}
      {!isNewRelease && category === 'papers' && (
        <div>
          <p className='mb-2'>Grade</p>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className='px-3 py-2 border rounded'
            required
          >
            <option value="">Select Grade</option>
            <option value="grade_01_05">Grade 01- Grade 05</option>
            <option value="grade_06_09">Grade 06- Grade 09</option>
            <option value="ol">O/L</option>
            <option value="al">A/L</option>
          </select>
        </div>
      )}

      {/* Submit */}
      <button type="submit" className='bg-black text-white px-6 py-2 rounded w-fit'>Add Product</button>
    </form>
  );
};

export default Add;

