import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
	padding: 1rem;
	max-width: 30rem;
	margin: 2rem auto;
	border-radius: 4px;
	background: linear-gradient(180deg, #307e6c, #2b996d);

	& label {
		display: block;
		margin-bottom: 0.25rem;
		font-family: "Roboto Condensed", sans-serif;
		font-size: 0.5rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	& input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #76c0ae;
		border-radius: 0.25rem;
		background-color: transparent;
		color: #c2e9e0;
		font-size: 1rem;
	}

	& .input-group {
		display: flex;
		justify-content: space-evenly;
		gap: 1.5rem;
	}

	& .actions {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	& .button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.25rem;
		background: linear-gradient(180deg, #1f584b, #17493d);
		color: #c2e9e0;
		font-family: "Roboto Condensed", sans-serif;
		cursor: pointer;
	}

	& .buttonAlt {
		font-family: "Roboto Condensed", sans-serif;
		border: none;
		background: transparent;
		color: #c2e9e0;
		cursor: pointer;
	}

	& button:hover {
		background: linear-gradient(180deg, #1b5346, #113c32);
	}

	& .buttonAlt:hover {
		background: transparent;
		color: #91e1d0;
	}
`;

export default function InvestmentForm(props) {
	const [userInput, setUserInput] = useState(null);
	const handleOnChange = (e) => {
		setUserInput({
			...userInput,
			[e.target.id]: +e.target.value,
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();
		props.onSubmitHanlder(userInput);
	};

	return (
		<Form onSubmit={submitHandler}>
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input onChange={handleOnChange} type="number" id="current-savings" />
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						onChange={handleOnChange}
						type="number"
						id="yearly-contribution"
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input onChange={handleOnChange} type="number" id="expected-return" />
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input onChange={handleOnChange} type="number" id="duration" />
				</p>
			</div>
			<p className="actions">
				<button onClick={props.handleReset} type="reset" className="buttonAlt">
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</Form>
	);
}
