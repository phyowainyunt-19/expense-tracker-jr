import React from 'react';
import { Header } from './components';
import { Balance } from './components';
import { IncomeExpenses } from './components';
import { TransactionList } from './components';
import { AddTransaction } from './components';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
