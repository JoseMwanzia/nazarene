import './App.css';
import About from './components/about/About';
import Counter from './components/about/Counter';
import Donations from './components/Donations';
import Events from './components/Events';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Donations/>
      <About/>
      <Counter/>
      <Gallery/>
      <Testimonials/>
      <Events/>
      <Partners/>
      <Footer/>
    </>
  );
}

export default App;
