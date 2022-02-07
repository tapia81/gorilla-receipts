import './App.css';
import { useState } from 'react';
import records from './data/records';
import DisplayReceipt from './components/Receipt';
function App() {
	const [ receipts, setReceipts ] = useState(records);

	const info = receipts.map((item, index) => {
		return <DisplayReceipt {...item} key={index} />;
	});
	return (
		<div className="App">
			<h1>{info}</h1>
		</div>
	);
}

export default App;
