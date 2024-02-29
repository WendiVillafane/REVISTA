import './App.css'
import { Animelogo } from './components/Animelogo'
import { Informacion } from './components/Informacion'
import { Nombre } from './components/Nombre'
import { Footer } from './components/Footer'

function App() {
  return (
    <article className="componentes">
      <Animelogo />
      <Informacion />
      <Nombre />
      <Footer />
    </article>
  )
}
export default App