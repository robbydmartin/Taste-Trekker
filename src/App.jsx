import { Routes, Route } from "react-router-dom";
import './css/App.css'
import Home from "./pages/Home"
import NavBar from './components/NavBar';
import RecipeDetails from './pages/RecipeDetails';
import SeachResults from './pages/SearchResults';

function App() {
  return (
    <main className="main-content">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes/:recipeId' element={<RecipeDetails />} />
        <Route path='/search-results/:searchQuery' element={<SeachResults />} />
      </Routes>
    </main>
  )
}

export default App
