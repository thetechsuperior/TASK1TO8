import React from 'react';
import logo from './images/logo.png';
import searchButton from './images/search.png';
import './App.css';
import rocket from './images/rocketShape.png';
import image from './images/Image.png';
import footer from './images/RoundedRectangle.png';

function Header() {
  return (
    <header>
      <a href="/">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </a>
      <nav className="menu">
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="./services">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="./faq">FAQ</a></li>
        </ul>
        <div className="searchButton">
          <a href="#"><img src={searchButton} alt="search" /></a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero container" style={{ display: 'flex'}}>
      <div className="TextArea">
        <h1>
          <span className="yellowText">Subscribe Now</span>
          <br /> to Our Newsletter
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris.
          <br />
        </p>
        <form action="#" method="post">
          <div className="fieldArea">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="fieldArea">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="ImageArea">
        <img className="threeImages" src={rocket} />
        <img src={image} alt="hero" style={{width:'auto', height:500, paddingTop: 100, paddingLeft:60}} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <img src={footer} alt="footer" style={{width:300, paddingTop:50}}/>
      </div>
    </>
  );
}


function App() {
  return (
    <div className="containerStandard">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
