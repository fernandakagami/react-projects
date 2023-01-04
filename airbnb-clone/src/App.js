import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        img={require('./images/' + item.coverImg)}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
