import { API_TOKEN, API_URL } from "@/const"
import { cache } from "react"

export const getGlobalConfig = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    try {
        const response = await fetch(`${API_URL}/global?${searchParams.toString()}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${API_TOKEN}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching global config:", error)
        return null
    }
})

export const getGlobalSeo = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate[seo][populate]", "*")
    searchParams.append("filters[slug][$eq]", "global")
    try {
        const response = await fetch(`${API_URL}/global?${searchParams.toString()}`, {
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

export const getGlobalData = cache(async () => {
    const searchParams = new URLSearchParams()
    searchParams.append("populate", "*")
    searchParams.append("filters[slug][$eq]", "global")
    try {
        const response = await fetch(`${API_URL}/global?${searchParams.toString()}`, {
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