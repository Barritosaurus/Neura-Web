import React, { Component } from "react";

class TwitterFeed extends Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.src = "https://platform.twitter.com/widgets.js";
		script.async = true;
		script.charset = "utf-8";
		document.body.appendChild(script);
	}

	componentWillUnmount() {
		const script = document.querySelector(
			"script[src='https://platform.twitter.com/widgets.js']",
		);
		if (script) {
			document.body.removeChild(script);
		}
	}

	render() {
		return (
			<div>
				<a
					className="twitter-timeline"
					data-width="480"
					data-height="720"
					data-theme="dark"
					href="https://twitter.com/NeuraStudios?ref_src=twsrc%5Etfw"
				>
                    Tweets by NeuraStudios
				</a>
			</div>
		);
	}
}

export default TwitterFeed;
