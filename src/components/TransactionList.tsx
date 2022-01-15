import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Transaction } from "./Transaction";

export const TransactionList: React.FunctionComponent = () => {

	const expenseContext = useContext(ExpenseContext);
	const { dummyTransactions } = expenseContext;

	return (
		<div>
			<h3>History</h3>
			{
				dummyTransactions.length === 0 
				? "You don't have transacitions" 
				: 
				<ul className="list">
					{dummyTransactions?.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
				</ul>
			}
		</div>
	);
};