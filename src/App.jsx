import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Journey from "./components/Journey"

function App() {
  const [showJourney, setShowJourney] = useState(false)

  return (
    <>
      <Header onEducationClick={() => setShowJourney(true)} />
      <Hero />

      {showJourney && <Journey />}

      <About />
      <Footer />
    </>
  )
}

export default App
