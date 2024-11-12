import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import pizzaData from "./data";

function Header() {
  return <h1 class="title-h">Johnson's Pizza Co.</h1>;
}

function Pizza({ pizza }) {
  return (
    <div class="pizzaContainer">
      <img src={pizza.photoName} alt={pizza.name} class="image" />
      <h3>Name: {pizza.name}</h3>
      <p>Ingredients: {pizza.ingredients}</p>
      <p>Price: ${pizza.price}</p>
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <ul class="nav-container">
        <li class="nav-links"><a href="/">home</a></li>
        <li class="nav-links"><a href="/">menu</a></li>
        <li class="nav-links"><a href="/">about</a></li>
      </ul>
    </div>
  );
}

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <input
        type="text"
        placeholder="Search pizzas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {filteredPizzas.length > 0 ? (
        <div className="pizzaMenu">
          {filteredPizzas.map((pizza) => (
            <Pizza key={pizza.name} pizza={pizza} />
          ))}
        </div>
      ) : (
        <p>No pizzas match your search.</p>
      )}
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <footer>
      <div class="footer-container">
        <div class="message">
          <p>{isOpen ? "We're currently open" : "Sorry we're closed"}</p>
        </div>
      {isOpen && <button class="btn">Order Now</button>}
      <Navbar/> 
      {isOpen && <h4>Authentic Italian Cuisine</h4>}
      </div>
    </footer>
  );
}

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas\spinaci.jpg" alt="Pizza Spinaci"></img>
//       <h3>Name: Pizza Spinaci</h3>
//       <p>Ingredients: Tomato, mozarella, spinach, and ricotta cheese</p>
//       <p>Price: $10</p>
//     </div>

//   );
// }
// SOLUTION ^ Activity 2

function App() {
  return (
    <div>
      <Header />
      <Footer/>
      <Menu/>
    </div>
    // <Pizza
    //   image="pizzas\spinaci.jpg"
    //   title="Pizza Spinaci"
    //   ingredients="Tomato, mozarella, spinach, and ricotta cheese"
    //   price="10"
    // />
    // <Pizza
    //   image="pizzas\funghi.jpg"
    //   title="Pizza Funghi"
    //   ingredients="Tomato, mozarella, onions and mushrooms"
    //   price="12" 
    // />
    /* <Pizza />
    <Pizza /> */
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
