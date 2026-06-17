import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Features from './components/features/features';
import UrgencyBanner from './components/urgencyBanner/urgencyBanner';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <Hero />
      <Features />
      <UrgencyBanner />
    </main>
    <Footer />
  </React.StrictMode>
);
