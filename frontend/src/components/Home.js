import React from 'react';
import Hello from './Hello';
import Greeks from './Greeks';
import Calendar from './Calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import Joy from './Joy';
import MessageButton from './MessageButton';
import HomePage from './HomePage'; // Corrected import statement


const Home = () => {
  return (
    <div>
      <center>
        <div>
          <HomePage/>
        </div>
      </center>
    </div>
  );
};

export default Home;
