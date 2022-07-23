import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "../src/Pages/Home"
import About from '../src/Pages/About';
import SingleCocktail from '../src/Pages/SingleCocktail';
import Error from '../src/Pages/Error';
import Navbar from "../src/components/Navbar"


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
