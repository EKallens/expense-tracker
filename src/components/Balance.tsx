import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

export const Balance: React.FunctionComponent = () => {

	const expenseContext = useContext(ExpenseContext);
	const { dummyTransactions } = expenseContext;
	const expenses:number = dummyTransactions.reduce((acc, current) => (current.amount < 0 ? current.amount + acc : acc + 0), 0);
	const incomes:number = dummyTransactions.reduce((acc, current) => (current.amount > 0 ? current.amount + acc : acc + 0), 0);
	
	const balance:number = incomes - Math.abs(expenses);

	return (
		<div>
			<h4>Your Balance</h4>
			<h1>{`$${balance}`}</h1>
		</div>
	);
};