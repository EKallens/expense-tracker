import { DummyTransactionsItem } from '../types/GeneralTypes';

export default (state:any, action:any) => {
	switch(action.type){
		case 'DELETE_TRANSACTION': return {
			...state,
			dummyTransactions: state.dummyTransactions.filter((transaction: DummyTransactionsItem) => transaction.id !== action.payload)
		}
		case 'ADD_TRANSACTION': return {
			...state,
			dummyTransactions: [action.payload, ...state.dummyTransactions]
		}
		default: 
			return state;
	};
};