import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ImageCard, { ImageCardProps } from "./ImageCard";
import "../css/ImageTable.css";

interface ImageTableProps {
    images: ImageCardProps[];
    visible: boolean;
}

const ImageTable: React.FC<ImageTableProps> = ({ images, visible }) => {
	const [visibleImages, setVisibleImages] = useState<ImageCardProps[]>([]);

	useEffect(() => {
		if (visible) {
			const timeouts = images.map((image, index) => {
				return setTimeout(() => {
					setVisibleImages((prevState) => [...prevState, image]);
				}, index * 100);
			});

			return () => {
				timeouts.forEach((timeout) => clearTimeout(timeout));
			};
		} else {
			setVisibleImages([]);
		}
	}, [visible, images]);

	return (
		<div className="flex flex-col items-center z-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 auto-rows-[auto] mr-4 z-10">
				<TransitionGroup component={null}>
					{visibleImages.map((image) => (
						<CSSTransition key={image.src} timeout={300} classNames="image">
							<ImageCard {...image} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</div>
	);
};

export default ImageTable;
