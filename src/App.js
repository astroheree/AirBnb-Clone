import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import Data from './data.js'
import './App.css';

function App() {
  const cards = Data.map((each_data) => {
    return (
      <Card
        key = {each_data.id}
        // {...each_data}
        each_data = {each_data}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
