import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil';
import Panier from './pages/Panier';
import Produits from './pages/Produits';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/accueil">Accueil</Link></li>
            <li><Link to="/produits">Produits</Link></li>
            <li><Link to="/panier">Panier</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="accueil" element={<Accueil titre="Page d'accueil" />} />
          <Route path="produits" element={<Produits />} />
          <Route path="panier" element={<Panier />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
