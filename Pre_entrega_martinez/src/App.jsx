import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemDetailContainer/>

    </>
  )
}

export default App
