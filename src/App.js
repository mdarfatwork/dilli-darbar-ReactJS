import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/reused/Navbar';
import Footer from './components/reused/Footer';
import Menu from './pages/Menu';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import products from './assets/fake-data/products';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CheckOut from './pages/CheckOut';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
      setMenuData(products);
  }, []);
  const convertToSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-');
  };
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><CheckOut/></ProtectedRoute>} />
        {menuData.map((item) => (
        <Route
          key={item.id} path={`/food/${convertToSlug(item.title)}`}
          element={<ProductDetails id={item.id} name={item.title} image01={item.image01} image02={item.image02} image03={item.image03} desc={item.desc} category={item.category} price={item.price} />}
          />
        ))}
      </Routes>
      <Footer/>
      </AuthContextProvider> 
    </BrowserRouter>
  );
}

export default App;
