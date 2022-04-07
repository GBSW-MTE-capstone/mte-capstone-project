import React from 'react';
import './App.css';
import Body from './view/body';
import Footer from './view/footer';
import Header from './view/header';

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
