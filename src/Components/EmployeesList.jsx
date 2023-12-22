import React, { useState, useEffect } from "react";
import employeesJSON from "./employees.json";

const EmployeeList = () => {
	const [employees] = useState(employeesJSON.data);
	const [ageFilter, setAgeFilter] = useState([]);
	const [salaryFilter, setSalaryFilter] = useState([]);

	const filterEmployees = () => {
		return employees.filter((employee) => {
			const ageInRange =
				(ageFilter.includes("below25") &&
					parseInt(employee.employee_age) < 25) ||
				(ageFilter.includes("25to40") &&
					parseInt(employee.employee_age) >= 25 &&
					parseInt(employee.employee_age) <= 40) ||
				(ageFilter.includes("above40") && parseInt(employee.employee_age) > 40);

			const salaryInRange =
				(salaryFilter.includes("below1.25lpa") &&
					parseInt(employee.employee_salary) < 125000) ||
				(salaryFilter.includes("1.5to3lpa") &&
					parseInt(employee.employee_salary) >= 150000 &&
					parseInt(employee.employee_salary) <= 300000) ||
				(salaryFilter.includes("above3lpa") &&
					parseInt(employee.employee_salary) > 300000);

			return ageInRange && salaryInRange;
		});
	};

	const handleAgeFilterChange = (value) => {
		if (ageFilter.includes(value)) {
			setAgeFilter(ageFilter.filter((filter) => filter !== value));
		} else {
			setAgeFilter([...ageFilter, value]);
		}
	};

	const handleSalaryFilterChange = (value) => {
		if (salaryFilter.includes(value)) {
			setSalaryFilter(salaryFilter.filter((filter) => filter !== value));
		} else {
			setSalaryFilter([...salaryFilter, value]);
		}
	};

	const filteredEmployees = filterEmployees();

	return (
		<div>
			<div>
				Age Filter:
				<label htmlFor="below25">
					<input
						id="below25"
						type="checkbox"
						value="below25"
						checked={ageFilter.includes("below25")}
						onChange={() => handleAgeFilterChange("below25")}
					/>
					Below 25
				</label>
				<label htmlFor="25to40">
					<input
						id="25to40"
						type="checkbox"
						value="25to40"
						checked={ageFilter.includes("25to40")}
						onChange={() => handleAgeFilterChange("25to40")}
					/>
					25 - 40
				</label>
				<label htmlFor="above40">
					<input
						id="above40"
						type="checkbox"
						value="above40"
						checked={ageFilter.includes("above40")}
						onChange={() => handleAgeFilterChange("above40")}
					/>
					Above 40
				</label>
				<br />
				<label htmlFor="below1.5">
					Salary Filter:
					<input
						id="below1.5"
						type="checkbox"
						value="below1.25lpa"
						checked={salaryFilter.includes("below1.25lpa")}
						onChange={() => handleSalaryFilterChange("below1.25lpa")}
					/>
					Below 1.25 LPA
				</label>
				<label htmlFor="1.5to3">
					<input
						id="1.5to3"
						type="checkbox"
						value="1.5to3lpa"
						checked={salaryFilter.includes("1.5to3lpa")}
						onChange={() => handleSalaryFilterChange("1.5to3lpa")}
					/>
					1.5 - 3 LPA
				</label>
				<label htmlFor="above3">
					<input
						id="above3"
						type="checkbox"
						value="above3lpa"
						checked={salaryFilter.includes("above3lpa")}
						onChange={() => handleSalaryFilterChange("above3lpa")}
					/>
					Above 3 LPA
				</label>
			</div>
			<table style={{ width: "100%" }}>
				<thead>
					<tr
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "10px 20px",
						}}>
						<th>ID</th>
						<th>Name</th>
						<th>Age</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					{filteredEmployees.length > 0
						? filteredEmployees.map((employee) => (
								<tr
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										padding: "10px 20px",
									}}
									key={employee.id}>
									<td>{employee.id}</td>
									<td>{employee.employee_name}</td>
									<td>{employee.employee_age}</td>
									<td>{employee.employee_salary}</td>
								</tr>
						  ))
						: employees.map((employee) => {
								return (
									<tr
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											padding: "10px 20px",
										}}
										key={employee.id}>
										<td>{employee.id}</td>
										<td>{employee.employee_name}</td>
										<td>{employee.employee_age}</td>
										<td>{employee.employee_salary}</td>
									</tr>
								);
						  })}
				</tbody>
			</table>
		</div>
	);
};

export default EmployeeList;
