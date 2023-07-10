import Menu from './components/Menu'
import Slider from './components/Slider'
import Columns from './components/Columns'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <main>
        <Menu/>
        <Slider/>
        <div class="main-title">
        <h1>Título</h1>
        <p>
          Soy un párrafo explicativo de la tarea, este el mismo proyecto realizado anteriormente,
          peros en React.
        </p>
      </div>
        <Columns/>
        <Footer/>
    </main>
  )
}
