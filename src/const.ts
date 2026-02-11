export const menuItems = [
    { name: "Trang chủ", link: "/" },
    { name: "Sản phẩm", link: "/catalog" },
    { name: "Tin tức", link: "/news" },
    { name: "Liên hệ", link: "/contact" },
];
  
export const PRODUCT_PER_PAGE = 9;
export const NEWS_PER_PAGE = 9;
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || "";
export const IMAGE_URL = process.env.NEXT_PUBLIC_API_MAIN_URL || "http://localhost:4000";
export const MAIN_API_URL = process.env.NEXT_PUBLIC_API_MAIN_URL || "http://localhost:4000";