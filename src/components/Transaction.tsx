import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { DummyTransactionsItem } from '../types/GeneralTypes';

interface ITransaction {
	transaction: DummyTransactionsItem
}

export const Transaction: React.FunctionComponent<ITransaction> = ({ transaction }) => {

	const {deleteTransaction} = useContext(ExpenseContext);

	return (
		<li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
			{transaction.text}
			<span>{`${transaction.amount < 0 ? '-' : '+'}$${Math.abs(transaction.amount)}`}</span>
			<button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
		</li>
	);
};