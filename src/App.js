import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import PageNotFounded from './Components/PageNotFounded';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Testimonial from './Components/Testimonial/Testimonial';
function App() {
  return (
    <>
      <Navbar>
        <About/>
        <Projects/>
        <Skills/>
        <Testimonial/>
        <Footer />
      </Navbar>
     
    </>
  );
}

export default App;
