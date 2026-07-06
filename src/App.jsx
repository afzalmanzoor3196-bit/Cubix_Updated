import Navbar from './components/Navbar'
import TextUsTab from './components/TextUsTab'
import Hero from './components/Hero'
import SuccessStories from './components/SuccessStories'
import Stats from './components/Stats'
import Process from './components/Process'
import Technologies from './components/Technologies'
import Testimonials from './components/Testimonials'
import Industries from './components/Industries'
import Awards from './components/Awards'
import Highlights from './components/Highlights'
import Blogs from './components/Blogs'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans antialiased">
      <TextUsTab />
      <Navbar />
      <Hero />
      <SuccessStories />
      <Stats />
      <Process />
      <Technologies />
      <Testimonials />
      <Industries />
      <Awards />
      <Highlights />
      <Blogs />
      <FinalCTA />
      <Footer />
    </div>
  )
}
