import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import EmployeeCard, { EmployeeCardProps } from "./EmployeeCard";
import "../css/grow-animation.css";

interface EmployeeTableProps {
    employees: EmployeeCardProps[];
    visible: boolean;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, visible }) => {
	const [visibleEmployees, setVisibleEmployees] = useState<EmployeeCardProps[]>([]);

	useEffect(() => {
		if (visible) {
			const timeouts = employees.map((employee, index) => {
				return setTimeout(() => {
					setVisibleEmployees((prevState) => [...prevState, employee]);
				}, index * 100);
			});

			return () => {
				timeouts.forEach((timeout) => clearTimeout(timeout));
			};
		} else {
			setVisibleEmployees([]);
		}
	}, [visible, employees]);

	return (
		<div className="flex flex-col items-center z-10">
			<div className={"w-full max-w-3xl h-[80vh]  pb-8  z-10"}>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[auto] mr-4  z-10">
					<TransitionGroup component={null}>
						{visibleEmployees.map((employee) => (
							<CSSTransition key={employee.name} timeout={300} classNames="card">
								<EmployeeCard {...employee} />
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</div>
		</div>
	);
};

export default EmployeeTable;
