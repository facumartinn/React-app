import React from 'react';
import './Navbar.css';


// Convención: usar mayúscula en el nombre de los componentes.
function Navbar() {
  return (
    <div>
      <h1 className="title">FACUNDO MARTIN</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About me</a></li>
        </ul>
      </nav>
      <p>Hi! My name is Facundo, i'm a Full Stack developer. Currently learning some ReactJS.</p>
    </div>
  );
}

export default Navbar;
