import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm mt-auto w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold uppercase tracking-wide border-b-2 border-[#408ebd] w-fit pb-1 mb-2">
              Về chúng tôi
            </h3>
            <p className="text-white font-bold text-base uppercase leading-relaxed">
              Doanh Nghiệp Tư Nhân Máy bơm thổi Khí Thành Đạt
            </p>
            <div className="flex items-start gap-3">
              <MapPin className="shrink-0 text-[#408ebd] mt-1" size={18} />
              <Link href='https://maps.app.goo.gl/kLt7PksZQDgrd4ab6' className="hover:text-white transition-colors">
                105 Ao Đôi, Phường Bình Trị Đông, TPHCM
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="shrink-0 text-[#408ebd]" size={18} />
              <Link href="mailto:thanhdat0611@yahoo.com.vn" className="hover:text-white transition-colors">
                thanhdat0611@yahoo.com.vn
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="shrink-0 text-[#408ebd]" size={18} />
              <Link href="/" target="_blank" className="hover:text-white transition-colors">
                maythoioxydailoan.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold uppercase tracking-wide border-b-2 border-[#408ebd] w-fit pb-1 mb-2">
              Hỗ trợ khách hàng
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
                  <ChevronRight size={16} /> Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="flex items-center gap-2 hover:text-white transition-colors">
                  <ChevronRight size={16} /> Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="flex items-center gap-2 hover:text-white transition-colors">
                  <ChevronRight size={16} /> Liên hệ báo giá
                </Link>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-[#408ebd]/10 border border-[#408ebd]/30 rounded-lg">
               <p className="text-xs uppercase font-semibold text-gray-400">Hotline tư vấn 24/7</p>
               <Link href="tel:0938542969" className="flex items-center gap-2 text-2xl font-bold text-white mt-1 hover:text-white transition-colors">
                  <Phone size={24} className="animate-pulse" />
                  090 3652738
               </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold uppercase tracking-wide border-b-2 border-[#408ebd] w-fit pb-1 mb-2">
              Bản đồ đường đi
            </h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1663166666665!2d106.602!3d10.798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b967732d8f9%3A0x123456789abcdef!2s995%20QL1A%2C%20B%C3%ACnh%20H%C6%B0ng%20H%C3%B2a%2C%20B%C3%ACnh%20T%C3%A2n%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 py-4 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-xs text-slate-500">
           © 2026 Máy thổi khí Thành Đạt. All rights reserved. Developed by Thuan Diep Corp.
        </div>
      </div>
    </footer>
  );
}