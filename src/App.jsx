import { React } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Marquee from './components/Marquee'
import About from './components/About'
import HuntersVsWhales from './components/HuntersVsWhales'
import Toknomics from './components/Toknomics'
import MarqueeTwo from './components/MarqueeTwo'
import Team from './components/Team'
import Faq from './components/Faq'
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
      <Toknomics />
      <MarqueeTwo />
      <Team />
      <Faq />
      {/* <Services />
      <Roadmap />
      <Footer /> */}
    </>
  )
}

export default App
