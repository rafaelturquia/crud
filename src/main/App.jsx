import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter } from 'react-router-dom';

import {Logo, Nav, Footer } from '../components/template/index';
import Routes from './Routes';
import './App.css';

export default props =>
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
