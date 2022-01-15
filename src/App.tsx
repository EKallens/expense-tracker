import './App.css';
import {
  AddTransaction,
  Balance,
  Header, 
  IncomeExpenses,
  TransactionList,
} from './components';
import {ExpenseProvider} from './context/ExpenseContext';

const App = () => {
  return (
    <ExpenseProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpenseProvider>
  );
};

export default App;
