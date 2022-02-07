import { useState } from 'react';
import './../App.css';

function DisplayReceipt({ person, order, paid }) {
	const { main, protein, rice, sauce, cost, drink, toppings } = order;
	const [ satis, notSat ] = useState(paid);

	function checkPayment() {
		notSat((paidYet) => (paidYet ? 'Paid' : 'Not Paid'));
	}

	function togglePayment() {
		notSat((toggle) => (toggle == false ? 'Not Paid' : 'Paid'));
	}

	return (
		<div className="column" style={TodoComponent}>
			<div className="buttons">
				<button onClick={checkPayment}>Check Payment Status</button>
				<button onClick={togglePayment}>Change Payment Status</button>
			</div>
			<div className="info">
				<p>Person: {person}</p>
				<p>{main}</p>
				<p>{protein}</p>
				<p>{satis}</p>
			</div>
		</div>
	);
}

export default DisplayReceipt;
