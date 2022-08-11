import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
