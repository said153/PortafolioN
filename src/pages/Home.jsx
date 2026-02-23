import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AcademicSection from '../components/AcademicSection'
import HobbiesSection from '../components/HobbiesSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      <Hero />
      <AcademicSection />
      <HobbiesSection />
      <Footer />
    </div>
  )
}