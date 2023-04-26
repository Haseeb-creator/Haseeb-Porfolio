import React from "react";
import ScrollService from "../../Utilities/ScrollService";
import "./FooterButton.css";


export default function FooterButton() {

	return (
		<div className="scroll-container">
			<button
				className="btn-scroll"
				onClick={() => ScrollService.scrollHandler.scrollToHome()}
			>
				{" "}
				<i className="fa fa-arrow-up"></i>
			</button>
		</div>
	);
}
