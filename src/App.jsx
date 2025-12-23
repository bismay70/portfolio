import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import About from "./components/About"
import Journey from "./components/Journey"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
            </>
          }
        />

        <Route path="/journey" element={<Journey />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
