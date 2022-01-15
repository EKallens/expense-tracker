
import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

export const IncomeExpenses: React.FunctionComponent = () => {

	const expenseContext = useContext(ExpenseContext);
	const { dummyTransactions } = expenseContext;
	const expenses:number = dummyTransactions.reduce((acc, current) => (current.amount < 0 ? current.amount + acc : acc + 0), 0);
	const incomes:number = dummyTransactions.reduce((acc, current) => (current.amount > 0 ? current.amount + acc : acc + 0), 0);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">{`+$${incomes}`}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">{`-$${Math.abs(expenses)}`}</p>
			</div>
		</div>
	);
};