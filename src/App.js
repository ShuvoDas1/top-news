import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';
import Chart from './Components/Chart/Chart';

function App() {
  return (
    <div>
        <Chart></Chart>
        <Header></Header>
        <TopHeadline></TopHeadline>
        
    </div>
  );
}

export default App;
