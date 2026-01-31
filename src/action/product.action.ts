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