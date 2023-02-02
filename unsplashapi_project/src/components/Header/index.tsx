import { useContext } from "react"
import { ImageContext } from "../../contexts/ImageContext"
import { MagnifyingGlass } from "phosphor-react"
import { HeaderContainer } from "./styles"
import VideoBackground from "../VideoBackground"

function Header() {
    const { searchImage, setSearchImage, fetchData } = useContext(ImageContext)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await fetchData(searchImage)
    }

    function handleSearchImage(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchImage(e.target.value)
    }

    return (
        <HeaderContainer>
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Buscar fotos"
                    value={searchImage}
                    onChange={handleSearchImage}
                />
                <button type="submit" disabled={!searchImage}>
                    <MagnifyingGlass size={32} />
                </button>
            </form>
            <VideoBackground />
        </HeaderContainer>
    )
}

export default Header
