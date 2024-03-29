import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import GameCard, { GameCardProps } from "./GameCard";
import "../css/grow-animation.css";

interface GameTableProps {
    games: GameCardProps[];
    visible: boolean;
}

const GameTable: React.FC<GameTableProps> = ({ games, visible }) => {
	const [visibleGames, setVisibleGames] = useState<GameCardProps[]>([]);
	const animationBreakpoint = 768; // Width breakpoint to disable animations (e.g., for phones)

	useEffect(() => {
		if (visible) {
			if (window.innerWidth >= animationBreakpoint) {
				const timeouts = games.map((game, index) => {
					return setTimeout(() => {
						setVisibleGames((prevState) => [...prevState, game]);
					}, index * 100);
				});

				return () => {
					timeouts.forEach((timeout) => clearTimeout(timeout));
				};
			} else {
				// Disable animations on small devices
				setVisibleGames(games);
			}
		} else {
			setVisibleGames([]);
		}
	}, [visible, games]);

	return (
		<div className="flex flex-wrap justify-center gap-8">
			<TransitionGroup component={null}>
				{visibleGames.map((game) => (
					<CSSTransition key={game.name} timeout={300} classNames="card">
						<GameCard name={game.name} imageUrl={game.imageUrl} link={game.link} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default GameTable;

