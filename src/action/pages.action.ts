import { API_TOKEN, API_URL } from "@/const"
import { cache } from "react"

export const getPageList = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    try {
        const response = await fetch(`${API_URL}/pages?${searchParams.toString()}`, {
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

export const getHomepageSeo = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate[seo][populate]", "*")
    searchParams.append("filters[slug][$eq]", "home")
    try {
        const response = await fetch(`${API_URL}/pages?${searchParams.toString()}`, {
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

export const getHomepageData = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("filters[slug][$eq]", "home")
    try {
        const response = await fetch(`${API_URL}/pages?${searchParams.toString()}`, {
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

export const getNewsSeo = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate[seo][populate]", "*")
    searchParams.append("filters[slug][$eq]", "news")
    try {
        const response = await fetch(`${API_URL}/news?${searchParams.toString()}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${API_TOKEN}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching news SEO:", error)
        return null
    }
})

export const getNewsData = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("filters[slug][$eq]", "news")
    try {
        const response = await fetch(`${API_URL}/news?${searchParams.toString()}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${API_TOKEN}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching news data:", error)
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

export const getContactSeo = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate[seo][populate]", "*")
    searchParams.append("filters[slug][$eq]", "contact")
    try {
        const response = await fetch(`${API_URL}/contacts?${searchParams.toString()}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${API_TOKEN}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching contact SEO:", error)
        return null
    }
})

export const getContactData = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("filters[slug][$eq]", "contact")
    try {
        const response = await fetch(`${API_URL}/contacts?${searchParams.toString()}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${API_TOKEN}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching contact data:", error)
        return null
    }
})