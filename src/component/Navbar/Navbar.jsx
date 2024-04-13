import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiMenu2Line } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsShoppingBagOpen(false);
  };

  const toggleShoppingBag = () => {
    setIsShoppingBagOpen(!isShoppingBagOpen);
  };

  const closeSidebarr = () => {
    setIsSidebarOpen(false);
  };

  const basket=useSelector(state=>state.basket.items)


  return (
    <>
<div style={{ backgroundColor: "white",  }} className={`flex justify-around items-center${scrollPosition > 10 ? ' fixed top-0 left-0 w-full z-20' : ''}`}>
  <div className='laptop:hidden tablet:block' onClick={toggleSidebar}>
    <span className='text-[18px]'><HiMenuAlt1 /></span>
  </div>
  <div>
    <img className='w-full max-w-[200px] tablet:w-[150px] laptop:w-40' src="https://fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" alt="" />
  </div>
  <div className='laptop:block tablet:hidden'>
    <div className='flex gap-10 text-[16px] font-medium py-7'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/pages">Pages</NavLink>
      <NavLink to="/featured">Featured</NavLink>
      <NavLink to="/shop">Shop</NavLink>
    </div>
  </div>
  <div className=' flex gap-4 text-[25px] text-center items-center'>
    <span><CiSearch /></span>
    <span className='laptop:block tablet:hidden text-[22px]'><IoPersonOutline /></span>
    <span className='laptop:block tablet:hidden text-[27px]'><CiHeart /></span>
    <span onClick={toggleShoppingBag}><LiaShoppingBagSolid /></span>
    {isShoppingBagOpen && basket && basket.map(item => (
      <div key={item.Id}>
        <img src={item.ProductImage} alt="" style={{ width: "50px" }} />
        <p>{item.Name}</p>
      </div>
    ))}
  </div>
</div>


      {isShoppingBagOpen && (

        <div style={{backgroundColor:"rgb(247,247,247)"}} className="border sidebar fixed top-0 right-0 h-screen w-[400px] z-30 flex ">
          <p className='text-[25px] cursor-pointer h-1' onClick={closeSidebar}>x</p>
          <p className='text-[25px]'>Shopping Cart</p>
          <p className='text-[25px]'>0</p>
        </div>

      )}

      {isSidebarOpen && (
        <div className="sidebar fixed top-0 left-0 h-screen w-[300px] z-30" style={{ backgroundColor: 'white' }}>
          <div className='flex h-14'>
            <button className='menubuton flex items-center bg-black text-white w-[150px] justify-center gap-3'><i className='text-[20px]'><RiMenu2Line /></i>  MENU </button>
            <button className='sidebar flex items-center bg-white w-[150px] justify-center gap-3 border border-transparent'><p className='text-[20px]'><i ><IoPersonOutline /></i></p> LOGIN </button>
          </div>
          <div className='sidebar flex flex-col'>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/">Home <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Shop">Shop <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Featured">Featured <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Pages">Pages<span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Blogs">Blogs<span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
          </div>
          <button onClick={closeSidebarr} className="absolute bottom-0 left-0 w-full py-2 bg-customGreen text-center buton">Close</button>
        </div>
      )}
    </>
  )
}

export default Navbar;
