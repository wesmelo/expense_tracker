import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransationList} from './components/TransationList'

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransationList />
    </div>
  );
}

export default App;
