import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import CartContextProvider from './context/CartContext';

function App() {
 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer title="Tu tienda online de moda urbana, skate, scooter & snowboard"/>} />
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer title="Tu tienda online de moda urbana, skate, scooter & snowboard"/>} />
            <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
