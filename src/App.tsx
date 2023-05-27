import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heroes } from './layouts/HomePage/Heroes';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks/>
      <Carousel />
      <Heroes />
    </div>
  );
}

export default App;
