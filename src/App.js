import { useState } from "react";
import { createGlobalStyle } from "styled-components";

import InvestmentForm from "./Components/InvestmentForm/InvestmentForm";
import InvestmentHeader from "./Components/UI/InvestmentHeader";
import ResultTable from "./Components/ResultTable.js/ResultTable";

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		font-family: "Quicksand", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* background-color: #242a28; */
		background: radial-gradient(#303b37, #1a1f1d);
		color: #e1eeeb;
}

`;

function App() {
	const [userInput, setUserInput] = useState(null);
	const calculateHandler = (userInput) => {
		setUserInput(userInput);
	};

	const yearlyData = []; // per-year results
	if (userInput) {
		let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
		const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
		const expectedReturn = +userInput["expected-return"] / 100;
		const duration = +userInput["duration"];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				// feel free to change the shape of the data pushed to the array!
				year: Math.floor(i + 1),
				yearlyInterest: Math.round(yearlyInterest),
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}
	}

	// const handleReset = () => {
	// 	setUserInput(null);
	// };

	return (
		<div>
			<GlobalStyles />
			<InvestmentHeader />
			<InvestmentForm
				handleReset={() => setUserInput(null)}
				onSubmitHanlder={calculateHandler}
			/>
			{userInput ? (
				<ResultTable
					data={yearlyData}
					currentSaving={userInput["current-savings"]}
				/>
			) : (
				<p style={{ textAlign: "center" }}>No investment calculated yet</p>
			)}
			{/* {userInput && (
				<ResultTable
					data={yearlyData}
					currentSaving={userInput["current-savings"]}
				/>
			)} */}
		</div>
	);
}

export default App;
