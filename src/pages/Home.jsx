import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactus from '../components/Contactus'
import Workus from '../components/Home/Workus'
import Motion from '../components/Home/Motion'
import Clientus from '../components/Home/Clientus'
import Quote1 from '../components/Home/Quote1'
import Experience from '../components/Home/Experience'
import Networkus from '../components/Home/Networkus'
import Serviceus from '../components/Home/Serviceus'
import Quote2 from '../components/Home/Quote2'
import Whatsapp from '../components/Whatsapp'
import Runningtext from '../components/Home/Runningtext'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Whatsapp />
                <Hero />
                <Runningtext />
                <Experience />
                <Motion />
                <Quote1 />
                <Clientus />
                <Networkus />
                <Serviceus />
                <Quote2 />
                <Workus />
                <Contactus />
            </div>
            <Footer />
        </main>
    )
}

export default Home
