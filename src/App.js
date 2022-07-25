import Header from "./components/Header/Header"
import ImageSlider from "./components/ImageSlider/ImageSlider"
import { Container, GlobalStyle } from "./Global/Global.styled"
import slides from "./images"

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ImageSlider slides={slides} />
      </Container>
    </>
  )
}

export default App
