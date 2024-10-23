import { Button } from '@chakra-ui/react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { useColorMode } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Uploadvideos from './components/Uploadvideos';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  const { colorMode, toggleColorMode } = useColorMode(); 

  return (
    <Router>         
      <Button className='togglebtn' size='sm' top={'4'} right={'4'} pos={'fixed'} colorScheme='blue' onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>  
      <Header/>
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos/>} />        
        <Route path="/upload" element={<Uploadvideos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
