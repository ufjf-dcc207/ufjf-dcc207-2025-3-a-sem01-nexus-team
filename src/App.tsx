import './App.css'
import Personagem from './Personagem'
import InterfaceExibicao from './InterfaceExibicao'

function App() {

  return (
    <>
      <div className="App">
        <h1>Nexus Team - Personagens</h1>
        <InterfaceExibicao>
          <Personagem
            nome="John Doe"
            imagem="https://via.placeholder.com/150"
            nivelPerigo={4}
            status={false}
            idade={30}
            dataNascimento="1993-01-01"
          />
          <Personagem
            nome="Jane Smith"
            imagem="https://via.placeholder.com/150"
            nivelPerigo={2}
            status={true}
            idade={25}
            dataNascimento="1998-05-15"
          />
        </InterfaceExibicao>
      </div>
    </>
  )
}

export default App
