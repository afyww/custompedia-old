import Aboutus from '../components/About/Aboutus'
import Nineyears from '../components/About/Nineyears'
import Ready from '../components/About/Ready'
import What from '../components/About/What'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'

function About() {
  return (
    <main>
      <Navbar />
      <div>
        <Whatsapp />
        <Aboutus />
        <Nineyears />
        <What />
        <Ready />
      </div>
      <Footer />
    </main>
  )
}

export default About
