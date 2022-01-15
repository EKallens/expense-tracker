import { useContext, useState } from 'react';
import { ExpenseType } from '../types/GeneralTypes';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseInitialState = { 
	text: '',
	amount: 0
};

export const AddTransaction = () => {

	const { addTransaction } = useContext(ExpenseContext)
	const [ expense, setExpense ] = useState<ExpenseType>(ExpenseInitialState);
	const { text, amount } = expense;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		setExpense((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(text === ''|| amount === 0){
			return;
		}
		addTransaction(expense)
		setExpense(ExpenseInitialState);
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
				<label htmlFor="text">Text</label>
				<input type="text" name="text" value={text} onChange={handleChange} placeholder="Enter text..." />
				</div>
				<div className="form-control">
				<label htmlFor="amount"
					>Amount <br />
					(negative - expense, positive - income)</label
				>
				<input type="number" name="amount" value={amount} onChange={handleChange} placeholder="Enter amount..." />
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	)
};