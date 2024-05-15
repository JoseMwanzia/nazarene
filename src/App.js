import './App.css';
import About from './components/about/About';
import Counter from './components/about/Counter';
import Donations from './components/Donations';
import Events from './components/Events';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import GiveADonation from './components/checkout/GiveADonation';
import { Routes,Route } from 'react-router-dom';
import BillingInfo from './components/checkout/BillingInfo';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        
        <Route exact path='/' element={
          [<Home/>,
          <Donations/>,
          <About/>,
          <Counter/>,
          <Gallery/>,
          <Testimonials/>,
          <Events/>,
          <Partners/>]
        }/>
        <Route path='/donations' element={<GiveADonation/>}/>
        <Route path='billing-info' element={<BillingInfo/>}/>
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
