import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Features from './components/features/features';
import PromoBanner from './components/promoBanner/promoBanner';
import Coverage from './components/coverage/coverage';
import UrgencyBanner from './components/urgencyBanner/urgencyBanner';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <Hero />
      <Features />
      <PromoBanner />
      <Coverage />
      <UrgencyBanner />
    </main>
    <Footer />
  </React.StrictMode>
);
