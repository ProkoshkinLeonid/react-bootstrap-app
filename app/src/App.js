import { Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { About } from './Pages/About';
import { Contacts } from './Pages/Contacts';
import { Home } from './Pages/Home';

function App() {
  return (
      <>
        <Header/>
         <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contacts" element={<Contacts/>}/>
         </Routes>
      </>
  );
}

export default App;
