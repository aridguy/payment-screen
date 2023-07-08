import React from 'react';
import './App.css';
// import Payment from './Route/Payment/Payment';
import Paystack from './Route/Signin/Paystack';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div>
    <Navbar />
      <Paystack />
    </div>
  );
}

export default App;
