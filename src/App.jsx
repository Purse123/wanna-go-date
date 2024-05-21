import Container from "./components/Container"
import PaperTexture from "./assets/paper-texture.jpg"

function App() {

  return (
    <div className="main h-screen w-full flex items-center justify-center"
      style={{
        background: `url(${PaperTexture})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container/>
    </div>
  )
}

export default App