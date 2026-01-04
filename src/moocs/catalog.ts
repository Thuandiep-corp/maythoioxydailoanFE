export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
  price: number;
  spec?: string;
  sku?: string;
}

export const productList: Product[] = [
  {
      id: 1,
      name: "Sản phẩm 1",
      slug: "san-pham-1",
      category: "danh-muc-1",
      image: "/logo.png",
      images: ["/logo.png", "/logo.png"],
      description: "simply dummy text of the printing and typese tting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 100000,
      spec: "Standard",
      sku: "SP-001"
  },
  {
      id: 2,
      name: "Sản phẩm 2",
      slug: "san-pham-2",
      category: "danh-muc-1",
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 150000,
      sku: "SP-002"
  },
  {
      id: 3,
      name: "Sản phẩm 3",
      slug: "san-pham-3",
      category: "danh-muc-1",
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 200000,
      sku: "SP-003"
  },
  {
      id: 4,
      name: "Sản phẩm 4",
      slug: "san-pham-4",
      category: "danh-muc-1",
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 250000,
      sku: "SP-004"
  },
  {
      id: 5,
      name: "Sản phẩm 5",
      slug: "san-pham-5",
      category: "danh-muc-1",
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 150000
  },
  {
      id: 6,
      name: "Sản phẩm 6",
      slug: "san-pham-6",
      category: "danh-muc-1",
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 200000
  },
  {
      id: 7,
      name: "Sản phẩm 7",
      slug: "san-pham-7",
      category: "danh-muc-1",
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 250000
  },
  {
      id: 8,
      name: "Sản phẩm 8",
      slug: "san-pham-8",
      category: "danh-muc-1", 
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 150000
  },
  {
      id: 9,
      name: "Sản phẩm 9",
      slug: "san-pham-9",
      category: "danh-muc-1", 
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 200000
  },
  {
      id: 10,
      name: "Sản phẩm 10",
      slug: "san-pham-10",
      category: "danh-muc-1", 
      image: "/logo.png",
      images: ["/logo.png"],
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      price: 250000
  }
];