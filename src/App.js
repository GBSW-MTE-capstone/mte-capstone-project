import React from 'react';
import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div>
      <div className='Frame'>
        <Header/>
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
