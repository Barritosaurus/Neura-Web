import { useState } from "react";

const DropDown = ({ options }: { options: string[] }) => {


	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div>
			<button 
			onClick={() => setIsExpanded(!isExpanded)}
			className="hover:bg-black-800">
			Dropdown
			</button>
			{isExpanded && 
				<div>
					{options.map(option => (
						<li key={option}>
							{option}
						</li>
					))}
				</div>
			}
		</div>
	)
}

export default DropDown;