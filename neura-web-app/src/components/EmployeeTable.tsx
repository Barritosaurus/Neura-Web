import React from "react";
import EmployeeCard, { EmployeeCardProps } from "./EmployeeCard";

interface EmployeeTableProps {
    employees: EmployeeCardProps[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{employees.map((employee) => (
				<EmployeeCard key={employee.name} {...employee} />
			))}
		</div>
	);
};

export default EmployeeTable;
