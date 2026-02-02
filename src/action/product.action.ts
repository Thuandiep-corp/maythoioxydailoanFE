import { API_TOKEN, API_URL } from "@/const"
import { cache } from "react"

export const getProductCategoryList = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("sort", "sort_weight:desc")
  try {
    const response = await fetch(`${API_URL}/category-products?${searchParams.toString()}`, {
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${API_TOKEN}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
      console.error("Error fetching product categories:", error)
      return null
  }
})

export const getProductList = cache(async (params: any = {}) => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("sort", "sort_weight:desc")

    if (params.categorySlug) {
        searchParams.append("filters[category][slug][$eq]", params.categorySlug)
    }
  try {
    const response = await fetch(`${API_URL}/products?${searchParams.toString()}`, {
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${API_TOKEN}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
      console.error("Error fetching product categories:", error)
      return null
  }
})

export const getProductDetail = cache(async (slug: string) => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("filters[slug][$eq]", slug) 
  try {
    const response = await fetch(`${API_URL}/products?${searchParams.toString()}`, {
        headers: {
            "Content-Type": "application/json",
            " authorization": `Bearer ${API_TOKEN}`,
      },
    })
    const data = await response.json()
    return data
  }   catch (error) {             
      console.error("Error fetching product by slug:", error)
      return null
  }
})

export const getProductSeo = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate[seo][populate]", "*")
    searchParams.append("filters[slug][$eq]", "product")
    try {
        const response = await fetch(`${API_URL}/products?${searchParams.toString()}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${API_TOKEN}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching pages:", error)
        return null
    }
})

export const getProductData = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("filters[slug][$eq]", "products")
    try {
        const response = await fetch(`${API_URL}/products?${searchParams.toString()}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${API_TOKEN}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching pages:", error)
        return null
    }
})
