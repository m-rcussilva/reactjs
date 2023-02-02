import axios from "axios"
import { createContext, ReactNode, useEffect, useState } from "react"

interface Image {
    id: string
    urls: {
        regular: string
    }
}

interface SearchContextProps {
    searchImage: string
    setSearchImage: (searchImage: string) => void
    images: Image[]
    setImages: (images: Image[]) => void
    fetchData: (query?: string) => Promise<void>
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
}

export const ImageContext = createContext({} as SearchContextProps)

interface SearchContextProviderProps {
    children: ReactNode
}

function ImageSearchProvider({ children }: SearchContextProviderProps) {
    const [searchImage, setSearchImage] = useState("")
    const [images, setImages] = useState<Image[]>([])
    const [isLoading, setIsLoading] = useState(false)

    async function fetchData(query?: string) {
        setIsLoading(true)
        try {
            const response = await axios.get(
                `https://api.unsplash.com/search/photos?per_page=30&query=${
                    query || searchImage
                }&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`
            )

            setImages(response.data.results)
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ImageContext.Provider
            value={{
                searchImage,
                setSearchImage,
                images,
                setImages,
                fetchData,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </ImageContext.Provider>
    )
}

export default ImageSearchProvider
