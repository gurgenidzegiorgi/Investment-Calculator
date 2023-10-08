import styled from "styled-components";

const Table = styled.table`
	max-width: 50rem;
	margin: 2rem auto;
	padding: 1rem;
	table-layout: fixed;
	border-spacing: 1rem;
	text-align: right;

	&:thead {
		font-size: 0.7rem;
		color: #83e6c0;
	}

	&:tbody {
		font-family: "Roboto Condensed", sans-serif;
		font-size: 0.85rem;
		color: #c2e9e0;
	}
`;

export default function ResultTable(props) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return (
		<Table>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((item) => {
					return (
						<tr key={item.year}>
							<td>{item.year}</td>
							<td>{formatter.format(item.savingsEndOfYear)}</td>
							<td>{formatter.format(item.yearlyInterest)}</td>
							<td>
								{formatter.format(
									item.savingsEndOfYear -
										props.currentSaving -
										item.yearlyContribution * item.year
								)}
							</td>
							<td>
								{formatter.format(
									props.currentSaving + item.yearlyContribution * item.year
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}
