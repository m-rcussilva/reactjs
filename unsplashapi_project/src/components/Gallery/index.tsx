import axios from "axios"
import { useContext, useEffect } from "react"
import { ImageContext } from "../../contexts/ImageContext"
import { GalleryContainer, Img } from "./styles"

interface Image {
    id: string
    urls: {
        regular: string
    }
}

function Gallery() {
    const { images, setImages, isLoading, setIsLoading } =
        useContext(ImageContext)

    async function fetchData() {
        setIsLoading(true)
        try {
            const response = await axios.get(
                `https://api.unsplash.com/photos?per_page=30&client_id=${
                    import.meta.env.VITE_UNSPLASH_API_KEY
                }`
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
        <>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                <GalleryContainer>
                    {images &&
                        images.map((image: Image) => {
                            return (
                                <Img key={image.id} src={image.urls.regular} />
                            )
                        })}
                </GalleryContainer>
            )}
        </>
    )
}

export default Gallery
