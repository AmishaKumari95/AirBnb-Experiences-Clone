import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cardd from "./components/Cardd"
import data from "./data"


function App() {
     const cards = data.map(item => {
      return <Cardd 
                key={item.id}
                {...item}
                
             />
     })
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <section className="card-list">
            {cards}
        </section>
       </div >
    </>
  )
}

export default App
