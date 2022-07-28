import './App.css';
import Navbar from './Navbar';
import Car from './Car';
import Cards1 from './Cards1';
import ContactForm from './Contact';
import TableInfo from './Table';
import TabsEx from './Tabs';
import BtnGrp from './BtnGrp';
import About from './About';
import Form from './Register';
import Login from './Login';
import Foot from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pricing from './Pricing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Car /><Cards1 /><TabsEx />
        <ContactForm /><TableInfo /><BtnGrp /><Foot /></>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Form />}></Route>
          <Route path='/aboutus' element={<About />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
        </Routes>
        </BrowserRouter>
        
        
    </div>
  );
}

export default App;
