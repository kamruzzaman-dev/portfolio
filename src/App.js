import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import PageNotFounded from './Components/PageNotFounded';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<PageNotFounded />} />
      </Routes>
    </>
  );
}

export default App;
