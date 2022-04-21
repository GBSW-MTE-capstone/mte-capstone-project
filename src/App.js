import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './page/Home';
import Board from './page/Board';
import NotFound from './page/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='Frame'>
          <Header/>
        </div>

        <div className='Frame'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/board" element={<Board />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
