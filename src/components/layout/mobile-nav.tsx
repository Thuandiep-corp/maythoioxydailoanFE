"use client"; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Newspaper, Phone } from 'lucide-react';
import { menuItems } from '@/const';

export function MobileNav() { 
    const pathname = usePathname();
    const icons = [Home, LayoutGrid, Newspaper, Phone];
    return (
        <nav className="sticky bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
            <ul className="flex justify-around items-center h-16">
                {menuItems.map((item, index) => {
                    const Icon = icons[index] || Home; 
                    const isActive = pathname === item.link;
                    return (
                        <li  key={'nav-mobile-item-' + index}>
                        <Link 
                            href={item.link}
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors border-transparent ${
                                isActive 
                                    ? 'text-[#408ebd] font-semibold' 
                                    : 'text-gray-500 hover:text-[#408ebd] border-x' 
                            }`}
                        >
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] mt-1 leading-none">
                                {item.name}
                            </span>
                        </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}