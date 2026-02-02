import { API_TOKEN, API_URL } from "@/const"
import { cache } from "react"

export const getNews = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("sort", "sort_weight:desc")
  try {
    const response = await fetch(`${API_URL}/articles?${searchParams.toString()}`, {
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

export const getNewsCategory = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("sort", "sort_weight:desc")
  try {
    const response = await fetch(`${API_URL}/category-articles?${searchParams.toString()}`, {
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

export const getVideo = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("sort", "sort_weight:desc")
  try {
    const response = await fetch(`${API_URL}/videos?${searchParams.toString()}`, {
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

