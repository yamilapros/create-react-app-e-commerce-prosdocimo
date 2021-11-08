import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';


function App() {
  /* const style = { backgroundColor: 'blue' }
  const handlerOnClick = () => {
    console.log('Hola')
  } */
 
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer title="Fashion Sale" subtitle="Nueva Colección" cta="Comprar ahora"/>
    </div>
  );
}

export default App;
