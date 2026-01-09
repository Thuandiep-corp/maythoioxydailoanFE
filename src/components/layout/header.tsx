"use client"; 
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import { Search, ShoppingCart, Facebook, Instagram, Phone, Mail } from 'lucide-react';
import { menuItems } from '@/const';
import Image from 'next/image';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="font-sans w-full sticky top-0 left-0 z-50 shadow-sm">
      <section className="hidden md:flex w-full bg-slate-900 text-white text-[13px] py-2.5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="opacity-90">Follow us:</span>
            <div className="flex items-center gap-2 ml-1">
               <Link 
                  href="https://www.facebook.com/atnguyen.46997/"
                  target="_blank"
                  className="h-7 w-7 flex items-center justify-center border border-white/40 rounded-full hover:bg-white/20 transition-all text-white"
                  title="Facebook"
               >
                  <Facebook size={14} />
               </Link>
               <Link 
                  href="#" 
                  target="_blank"
                  className="h-7 w-7 flex items-center justify-center border border-white/40 rounded-full hover:bg-white/20 transition-all text-white"
                  title="Instagram"
               >
                  <Instagram size={14} />
               </Link>
            </div>
          </div>
          <div className="font-medium text-center md:text-left hidden md:block">
            Máy thổi khí Đài Loan lớn nhất Việt Nam!
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
      </section>
      <section className="w-full bg-white py-4 shadow-sm relative z-50">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0 flex justify-start">
            <Image
              src="/logo.png" 
              alt="Logo"
              width={50}
              height={29}
            />  
          </Link>
          <nav className="hidden lg:block shrink-0">
            <ul className="flex items-center gap-6 xl:gap-8 text-gray-600 font-semibold text-[15px]">
              {menuItems.map((item, index) => {
                const isActive = item.link === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(item.link);

                return (
                  <li key={'header-nav-item-' + index}>
                    <Link 
                      href={item.link} 
                      className={`
                        relative block py-1 transition-colors whitespace-nowrap
                        after:content-[''] 
                        after:absolute 
                        after:left-0 
                        after:bottom-0 
                        after:h-0.5
                        after:bg-[#408ebd] 
                        after:transition-all 
                        after:duration-300 
                        ${isActive 
                          ? "text-[#408ebd] after:w-full" 
                          : "hover:text-[#408ebd] after:w-0 hover:after:w-full"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <section className="flex items-center gap-3 flex-1 justify-end max-w-2xl ml-auto">
            <div className="relative w-full max-w-100">
                <input 
                    type="text" 
                    placeholder="Bạn cần tìm gì?" 
                    className="w-full pl-5 pr-10 py-2.5 rounded-full border border-gray-200 outline-none focus:border-[#408ebd] focus:ring-1 focus:ring-[#408ebd] text-sm text-gray-700 bg-gray-50 focus:bg-white transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[#408ebd]" size={20} />
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 hover:border-[#408ebd] hover:text-[#408ebd] transition-colors relative group shrink-0">
                <ShoppingCart size={20} />
                
                <p className="hidden md:inline font-semibold text-sm">Giỏ hàng</p>
                <p className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                    0
                </p>
            </div>
          </section>
        </div>
      </section>
    </header>
  );
}