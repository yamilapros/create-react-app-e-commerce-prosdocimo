import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SuccessfulPurchase from './components/SuccessfulPurchase/SuccessfulPurchase';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import CartContextProvider from './context/CartContext';
import Footer from './components/Footer/Footer';


function App() {
 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div fluid className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer title="Tu tienda online de moda urbana, skate, scooter & snowboard"/>} />
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer title="Tu tienda online de moda urbana, skate, scooter & snowboard"/>} />
            <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/order' element={<Order />} />
            <Route exact path='/successful-purchase' element={<SuccessfulPurchase />}  />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
