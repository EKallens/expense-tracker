import { createContext, useReducer } from 'react';
import { DummyTransactions, ExpenseProviderProps, DummyTransactionsItem } from '../types/GeneralTypes';
import ExpenseReducer from './ExpenseReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState: DummyTransactions = {
	dummyTransactions: [
		{ id: '1', text: 'Flower', amount: -20 },
  		{ id: '2', text: 'Salary', amount: 300 },
  		{ id: '3', text: 'Book', amount: -10 },
  		{ id: '4', text: 'Camera', amount: 150 }
	],
	deleteTransaction: () => void {},
	addTransaction: () => void {}
};

export const ExpenseContext = createContext(initialState);

export const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
	const [state, dispatch] = useReducer(ExpenseReducer, initialState);
	
	const deleteTransaction = (id:number) => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	};

	const addTransaction = (transaction: DummyTransactionsItem) => {
		transaction.id = uuidv4();
		transaction.amount = Number(transaction.amount);
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	};
	
	const data = { dummyTransactions: state.dummyTransactions, deleteTransaction, addTransaction };
	
	return(
		<ExpenseContext.Provider value={data}>
			{children}
		</ExpenseContext.Provider>
	);
};