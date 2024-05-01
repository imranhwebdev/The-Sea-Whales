import { React } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Marquee from './components/Marquee'
import About from './components/About'
import HuntersVsWhales from './components/HuntersVsWhales'
// import Services from './components/Services'
// import Roadmap from './components/Roadmap'
// import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Marquee />
      <About />
      <HuntersVsWhales />
      {/* <Services />
      <Roadmap />
      <Footer /> */}
    </>
  )
}

export default App
