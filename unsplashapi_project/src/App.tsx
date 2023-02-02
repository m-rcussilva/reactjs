import { ThemeProvider } from "styled-components"
import ImageSearchProvider from "./contexts/ImageContext"
import Home from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <ImageSearchProvider>
                <Home />
            </ImageSearchProvider>
        </ThemeProvider>
    )
}

export default App
