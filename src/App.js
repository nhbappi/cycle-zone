import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './Components/Items/Items';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/items' element={<Items></Items>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
