import React, { useState } from "react";

export interface ImageCardProps {
    id: string;
    src: string;
    alt?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div
				className="p-4 cursor-pointer transform transition duration-200 ease-in-out hover:scale-110"
				onClick={openModal}
			>
				<img className="rounded w-48 h-48 object-cover" src={src} alt={alt} />
			</div>
			{isModalOpen && (
				<div
					className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
					onClick={closeModal}
				>
					<img
						className="rounded max-w-3xl max-h-[80%] object-cover"
						src={src}
						alt={alt}
					/>
				</div>
			)}
		</>
	);
};

export default ImageCard;
