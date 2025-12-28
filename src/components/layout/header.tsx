"use client";
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Facebook, Instagram, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="font-sans">
      
      <div className="w-full bg-[#408ebd] text-white text-[13px] py-2.5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-2">
            <span className="opacity-90">Follow us:</span>
            <div className="flex items-center gap-2 ml-1">

               <a 
                  href="https://www.facebook.com/atnguyen.46997/" 
                  className="h-7 w-7 flex items-center justify-center border border-white/40 rounded-full hover:bg-white/20 transition-all text-white"
                  title="Facebook"
               >
                  <Facebook size={14} />
               </a>
               
               <a 
                  href="#" 
                  className="h-7 w-7 flex items-center justify-center border border-white/40 rounded-full hover:bg-white/20 transition-all text-white"
                  title="Instagram"
               >
                  <Instagram size={14} />
               </a>
            </div>
          </div>

          <div className="font-medium text-center md:text-left hidden md:block">
            Máy thổi khí Đài Loan lớn nhất Việt Nam nè!!!!!
          </div>

          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>0903652738</span>
             </div>
             
             <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>nguyenthanhdat19741975@gmail.com</span>
             </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-4 shadow-sm relative z-50">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          
          <a href="/" className="shrink-0 flex justify-start">
            <img 
              src="/favicon.ico" 
              alt="Logo" 
              className="h-8 w-auto object-contain md:h-10" 
            />
          </a>

          <nav className="hidden lg:block shrink-0">
            <ul className="flex items-center gap-6 xl:gap-8 text-gray-600 font-semibold text-[15px]">
              <li><a href="#" className="hover:text-[#408ebd] transition-colors whitespace-nowrap">Trang chủ</a></li>
              <li><a href="#" className="hover:text-[#408ebd] transition-colors whitespace-nowrap">Sản phẩm</a></li>
              <li><a href="#" className="hover:text-[#408ebd] transition-colors whitespace-nowrap">Tin tức</a></li>
              <li><a href="#" className="hover:text-[#408ebd] transition-colors whitespace-nowrap">Liên hệ</a></li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-1 justify-end max-w-2xl ml-auto">
            
            <div className="relative w-full max-w-[400px]">
                <input 
                    type="text" 
                    placeholder="Bạn cần tìm gì?" 
                    className="w-full pl-5 pr-10 py-2.5 rounded-full border border-gray-200 outline-none focus:border-[#408ebd] focus:ring-1 focus:ring-[#408ebd] text-sm text-gray-700 bg-gray-50 focus:bg-white transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[#408ebd]" size={20} />
            </div>

            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 hover:border-[#408ebd] hover:text-[#408ebd] transition-colors relative group shrink-0">
                <ShoppingCart size={20} />
                <span className="font-semibold text-sm">Giỏ hàng</span>
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                    0
                </span>
            </button>

          </div>

          <div 
             className="lg:hidden text-gray-700 cursor-pointer"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
             {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>

        </div>

        {isMenuOpen && (
           <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl animate-fade-in z-50">
              <ul className="flex flex-col p-4 text-gray-600 font-medium">
                 <li className="mb-4">
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            placeholder="Bạn cần tìm gì?" 
                            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 outline-none text-sm"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                 </li>

                 <li><a href="#" className="block py-3 border-b border-gray-50 hover:text-[#408ebd]">Trang chủ</a></li>
                 <li><a href="#" className="block py-3 border-b border-gray-50 hover:text-[#408ebd]">Sản phẩm</a></li>
                 <li><a href="#" className="block py-3 border-b border-gray-50 hover:text-[#408ebd]">Tin tức</a></li>
                 <li><a href="#" className="block py-3 border-b border-gray-50 hover:text-[#408ebd]">Liên hệ</a></li>
                 
                 <li className="pt-4">
                    <a href="#" className="flex items-center gap-2 text-[#408ebd] font-semibold">
                        <div className="relative">
                            <ShoppingCart size={20} />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full">0</span>
                        </div>
                        Giỏ hàng của bạn
                    </a>
                 </li>
              </ul>
           </div>
        )}
      </div>

    </header>
  );
}