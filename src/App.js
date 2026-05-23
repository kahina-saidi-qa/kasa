import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import Logement from './pages/Logement/Logement';
import Error from './pages/Error/Error';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="./home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </div>
      <Footer />
    </>
  );
}

export default App;
