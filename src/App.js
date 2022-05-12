import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './page/Home';
import Board from './page/Board';
import NotFound from './page/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
