import React, { useState, useEffect } from "react";
import "./BackgroundVideo.css";

interface BackgroundVideoProps {
    videoSource: string;
    visible: boolean;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSource, visible }) => {
	const [isLeaving, setIsLeaving] = useState(false);

	useEffect(() => {
		if (!visible) {
			setTimeout(() => {
				setIsLeaving(true);
			}, 300); // adjust delay time as needed to match animation duration
		} else {
			setIsLeaving(false);
		}
	}, [visible]);
	return (
		<div className={`background-video ${isLeaving ? "leave" : "enter"}`}>
			<div className="fixed inset-0 w-full h-full overflow-hidden z-1">
				<video
					src={videoSource}
					autoPlay
					loop
					muted
					className="object-cover object-center w-full h-full"
				></video>
				<div className="fixed inset-0 z-1 w-full h-full bg-black opacity-50"></div>
			</div>
		</div>
	);
};

export default BackgroundVideo;
