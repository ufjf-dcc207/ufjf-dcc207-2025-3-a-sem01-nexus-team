import './App.css'
import Personagem from './Personagem'

function App() {

  return (
    <>
      <div className="App">
        <h1>Welcome to the App</h1>
        <Personagem  nome="John Doe" imagem="public/joelPB.png" nivelPerigo={5} status={true} idade={30} dataNascimento="1993-01-01" />
        <Personagem  nome="Jane Doe" imagem="public/jane_doe.png" nivelPerigo={1} status={false} idade={28} dataNascimento="1995-05-15" />
      </div>
    </>
  )
}

export default App
