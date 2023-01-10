import Header from "./components/Header"
import Item from "./components/Item"
import data from "./data"

function App() {
  const items = data.map(item => {
    return (
      <Item
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Header />
      <div>
        {items}
      </div>
    </div>
  );
}

export default App;
