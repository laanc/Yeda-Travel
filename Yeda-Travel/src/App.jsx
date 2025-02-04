
import './App.css'
import BannerPartners from './componentes/BannerPartners'
import BannerTrust from './componentes/BannerTrust'
import Destinos from './componentes/Destinos'
import Footer from './componentes/Footer'
import Hero from './componentes/Hero'
import NavBar from './componentes/NavBar'
import Ofertas from './componentes/Ofertas'
import Testimonios from './componentes/Testimonios'
import Contacto from './componentes/Contacto'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Hero/>
        <BannerPartners/>
        <Ofertas/>
        <BannerTrust/>
        <Destinos/>
        <Testimonios/>
        <Contacto/>
        <Footer/>
      </div>
    </>
  )
}

export default App
