
import './App.css';
import {useState, useEffect} from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Search from './components/Search'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [search, setSearch] = useState('');
  


  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then(result => result.json())
    .then(result => setProducts(result))
    .catch(error => console.log(error))
  }, [])


  const AddProduct = (product) => {
    if(currentSale.includes(product) === false){
      setCurrentSale([...currentSale, product])
    }
  }

  const RemoveProduct = (id) => (
    setCurrentSale(currentSale.filter((product) => product.id !== id))
  )

  return (
    <div className="App">
      <header>
        <div className="App--header">
          <span className="title">Burguer</span><span className="icon">Kenzie</span>
        </div>
       
        <Search
          products={products}
          setProducts={setProducts}
          search={search}
          setSearch={setSearch}
        />
      </header>
      <main>
           <ProductList
              products={products}
              AddProduct={AddProduct}
            />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          RemoveProduct={RemoveProduct}
        />
      </main>
    </div>
  )
}

export default App;
