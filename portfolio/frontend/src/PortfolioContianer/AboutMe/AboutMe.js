import React from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animation'

export default function AboutMe(props) {
	return (
		<div className="about-me-conatiner screen-container">
			<div className="about-me-parent">
				<ScreenHeading title={'About Me'} subHeading={'why Choose Me?'} />
			</div>
		</div>
	)
}

