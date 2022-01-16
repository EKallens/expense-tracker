import { MouseEventHandler } from "react";

export type ExpenseType = {
	text: string;
	amount: number;
};

export type DummyTransactions = {
	dummyTransactions: DummyTransactionsItem[],
	deleteTransaction: Function,
	addTransaction: Function
};

export type DummyTransactionsItem = { 
	id: string; 
	text: string; 
	amount: number;
};

export type ExpenseProviderProps = {
    children: React.ReactNode;
};

export type ActionsType = 
	| { type: 'DELETE_TRANSACTION', payload: string }
	| { type: 'ADD_TRANSACTION', payload: ExpenseType }