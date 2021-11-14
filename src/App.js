import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Hero from './components/Hero/Hero';




function App() {
  /* const style = { backgroundColor: 'blue' }
  const handlerOnClick = () => {
    console.log('Hola')
  } */
 
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ItemListContainer title="Tu tienda online de moda urbana, skate, scooter & snowboard"/>
    </div>
  );
}

export default App;
