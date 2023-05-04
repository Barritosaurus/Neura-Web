import React, { useEffect, useState, useRef } from "react";
import LoadingAnimation from "./LoadingAnimation";

const TwitterFeed: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const embedRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://platform.twitter.com/widgets.js";
		script.async = true;
		script.charset = "utf-8";
		document.body.appendChild(script);

		const checkIframe = () => {
			if (embedRef.current && embedRef.current.querySelector("iframe")) {
				setLoading(false);
			} else {
				setTimeout(checkIframe, 100);
			}
		};

		setTimeout(checkIframe, 1000);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div ref={embedRef}>
			{loading && (
				<div className="w-full h-72 flex items-center justify-center">
					<LoadingAnimation />
				</div>
			)}
			<a
				className="twitter-timeline"
				data-width="480"
				data-height="720"
				data-theme="dark"
				href="https://twitter.com/NeuraStudios?ref_src=twsrc%5Etfw"
				style={loading ? { display: "none" } : {}}
			>
                Tweets by NeuraStudios
			</a>
		</div>
	);
};

export default TwitterFeed;

