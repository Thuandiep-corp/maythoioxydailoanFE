"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "TRANG CHỦ", link: "#" },
    { name: "GIỚI THIỆU", link: "#" },
    { name: "SẢN PHẨM", link: "#" },
    { name: "PHƯƠNG THỨC THANH TOÁN", link: "#" },
    { name: "TIN TỨC", link: "#" },
    { name: "TÀI LIỆU", link: "#" },
    { name: "VIDEO", link: "#" },
    { name: "LIÊN HỆ", link: "#" },
  ];

  return (
    <header className="font-sans relative">
      
      <div className="w-full bg-[#438DB8] py-3 transition-all duration-300">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          
          <a href="#logo" className="flex flex-col leading-none uppercase select-none shrink-0">
            <img 
              src="https://avatars.githubusercontent.com/u/216257101?s=200&v=4" 
              alt="Logo"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex flex-1 max-w-2xl bg-white rounded-full items-center overflow-hidden h-10 pl-2 pr-1">
            <input 
              type="text" 
              placeholder="Bạn cần tìm gì?" 
              className="flex-1 px-4 text-black text-sm outline-none placeholder:text-gray-500 bg-transparent"
            />
            <div className="h-8 w-8 rounded-full flex items-center justify-center text-[#0033cc] hover:bg-gray-100 transition-colors">
              <i className='bx bx-search text-2xl'></i>
            </div>
          </div>

          <a href="#" className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 h-10 shrink-0 hover:bg-gray-100 transition-colors">
             <div className="relative">
                <i className='bx bx-cart text-2xl text-gray-700'></i>
                <span className="absolute -top-2 -right-2 bg-[#d0021b] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">0</span>
             </div>
             <span className="text-[#0033cc] font-bold text-sm">Giỏ hàng</span>
          </a>

          <div 
            className="md:hidden text-white text-4xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
          </div>

        </div>
      </div>

      <div className="w-full bg-[#FFFFFF] text-white border-t border-white/10 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between text-sm font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="h-10 px-2 lg:px-4 flex items-center text-[#666666] hover:bg-white/10 transition-colors whitespace-nowrap">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#4E71FF] text-white z-50 shadow-xl border-t border-white/20 animate-fade-in-down">
          <div className="flex flex-col p-4 gap-4">
            
            <div className="w-full bg-white rounded-full flex items-center overflow-hidden h-10 pl-2 pr-1">
              <input 
                type="text" 
                placeholder="Bạn cần tìm gì?" 
                className="flex-1 px-4 text-black text-sm outline-none placeholder:text-gray-500 bg-transparent"
              />
              <div className="h-8 w-8 rounded-full flex items-center justify-center text-[#0033cc]">
                <i className='bx bx-search text-2xl'></i>
              </div>
            </div>

            <a href="#" className="flex items-center justify-center gap-2 bg-white rounded-full px-4 h-10 w-full hover:bg-gray-100 transition-colors">
               <div className="relative">
                  <i className='bx bx-cart text-2xl text-gray-700'></i>
                  <span className="absolute -top-2 -right-2 bg-[#d0021b] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">0</span>
               </div>
               <span className="text-[#0033cc] font-bold text-sm">Giỏ hàng của bạn</span>
            </a>

            <ul className="flex flex-col divide-y divide-white/10 border-t border-white/20 mt-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="block py-3 px-2 hover:bg-white/10 font-medium text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      )}

    </header>
  );
}