import React, { useState } from "react";

/*
Dropdown menu that gets the options passed as props


EXAMPLE USAGE:
 <DropDown color="rgb(120,196, 234)" hoverColor="rgb(124, 172, 203)"
	options={[
		"Landing",
		"Applications",
		"Opportunities",
		"AboutUs"]}
	/>

*/

interface Props {
	color?: string,
	hoverColor?: string,
	options: string[]
}

const DropDown: React.FC<Props> = ({ color, hoverColor, options}) => {

	const [isExpanded, setIsExpanded] = useState(false);

	const style = { 
		backgroundColor: isExpanded && hoverColor ? hoverColor : color || 'transparent',
		border: 'none',
	};

	const handleClick = () => {
		console.log('dropdown open');
	};

	return (
		<div className="DropDown">
			<button
				onClick={() => setIsExpanded(!isExpanded)}>
				Dropdown
 			</button>
			 {isExpanded && 
				<div>
					{options.map(options => (
						<ol style={{ listStyle: 'none' }}>
							<li key={options}>
								{options}
							</li>
						</ol>
					))}
				</div>
			}
		</div>
	)
}

export default DropDown;