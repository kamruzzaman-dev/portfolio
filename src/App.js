import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import PageNotFounded from './Components/PageNotFounded';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/ContactMe/ContactMe'
import Bannar from './Components/Bannar/Bannar';
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Bannar />}></Route>
        <Route path='/home' element={<Bannar />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/project' element={<Projects />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/testimonial' element={<Testimonial />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<PageNotFounded />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
