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