

//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Appointment from './components/Appointment';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Visitor from './components/Visitor';
import Councillor from './components/Councillor';
import Success from './components/Success';
import Invalid from './components/Invalid';
import Logout from './components/Logout';
import Contact from './components/Contact'
import Box from '@mui/material/Box';
import FetchRegistration from './components/FetchRegistration';
import Blog from './components/Blog';




function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Box
          sx={{
            border: '2px solid #000', // Border color and thickness
            padding: '20px', // Padding inside the box
            margin: '20px', // Margin outside the box
            borderRadius: '10px', // Rounded corners
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/SignUp' element={<SignUp />} exact />
            <Route path='/SignIn' element={<SignIn />} exact />
            <Route path='/Councillor' element={<Councillor />} exact />
            <Route path='/FetchRegistration' element={<FetchRegistration />} exact />
            <Route path='/Visitor' element={<Visitor />} exact />
            <Route path='/Appointment' element={<Appointment />} exact />


            <Route path='/Blog' element={<Blog/>} exact />

                                                    
            <Route path='/Contact' element={<Contact />} exact />

            <Route path='/Success' element={<Success/>} exact />
            <Route path='/Invalid' element={<Invalid/>} exact />
            <Route path='/Logout' element={<Logout/>} exact />


          </Routes>
        </Box>
      </main>

      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#00000' }}>
        <p>&copy;KLEF</p>
        {/* <StickyFooter/> */}
      </footer>
    </React.Fragment>
  );
}

export default App;