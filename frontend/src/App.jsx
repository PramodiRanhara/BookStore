import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import NewRelese from './Pages/NewRelese'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Navi from './components/Navi'
import Layout from './components/Layout';
import SearchBar from './components/SearchBar'
import Viewd from './Pages/Viewd'
import { ToastContainer } from 'react-toastify';          
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navi/>
    <SearchBar />
     <Layout>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path="/products/" element={<Products />} />
       <Route path='/newRelese' element={<NewRelese/>}/>
       <Route path='/product/:productId' element={<Viewd/>}/>
       <Route path='/orders' element={<Orders/>}/>
       <Route path='/place-order' element={<PlaceOrder/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<Login/>}/>
      
      
      </Routes>
      </Layout>

      <ToastContainer                                 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
  
      
    </div>
  )
}

export default App;
