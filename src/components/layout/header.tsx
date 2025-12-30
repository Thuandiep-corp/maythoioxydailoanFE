import Link from 'next/link';
import { Search, ShoppingCart, Facebook, Instagram, Phone, Mail } from 'lucide-react';
import { menuItems } from '@/const';

export function Header() {


  return (
    <header className="font-sans">
      <section className="w-full bg-slate-900 text-white text-[13px] py-2.5">
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
            Máy thổi khí Đài Loan lớn nhất Việt Nam nè!!!!!
          </div>
          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0938542969" className="flex items-center gap-2 hover:text-white transition-colors">
                    0938 542 969
                </a>
             </div>
             <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:nguyenthanhdat19741975@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                nguyenthanhdat19741975@gmail.com
              </a>
             </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-4 shadow-sm relative z-50">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0 flex justify-start">
            <img 
              src="/favicon.ico" 
              alt="Logo" 
              className="h-8 w-auto object-contain md:h-10" 
            />
          </Link>
          <nav className="hidden lg:block shrink-0">
            <ul className="flex items-center gap-6 xl:gap-8 text-gray-600 font-semibold text-[15px]">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link href={item.link} className="hover:text-gray-900 transition-colors whitespace-nowrap">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="flex items-center gap-3 flex-1 justify-end max-w-2xl ml-auto">
            <div className="relative w-full max-w-100">
                <input 
                    type="text" 
                    placeholder="Bạn cần tìm gì?" 
                    className="w-full pl-5 pr-10 py-2.5 rounded-full border border-gray-200 outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 text-sm text-gray-700 bg-gray-50 focus:bg-white transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
            </div>
            <div className="hidden md:flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 hover:border-gray-900 transition-colors relative group shrink-0">
                <ShoppingCart size={20} />
                <span className="font-semibold text-sm">Giỏ hàng</span>

            </div>
          </section>
        </div>
      </section>
    </header>
  );
}