import React, { useState } from 'react'
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../Utilities/CommonUtils'
import ScrollService from '../../../Utilities/ScrollService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {

	const [selectedScreen, setSelectedScreen] = useState(0)
	const [showHeaderOptions, setShowHeaderOptions] = useState(false)

	console.log(TOTAL_SCREENS);

	const updateCurrentScreen = (currentScreen) => {
		if (!currentScreen || !currentScreen.screenInview)
			return;
		let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInview)
		if (screenIndex < 0)
			return;
	}

	let currentScreenSubscriptions = ScrollService.currentScreenBoardCaster.subscribe(updateCurrentScreen)

	const getHeaderOptions = () => {
		return (
			TOTAL_SCREENS.map((screen, i) => {
				return (<div key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={() => switchScreen(i, screen)}>
					<h2 style={{ color: 'white' }}>{screen.screen_name}</h2>
				</div >)
			})
		)
	}

	const getHeaderOptionsClass = (index) => {
		let classes = 'header-option'
		if (index < TOTAL_SCREENS.length - 1)
			classes += 'header-option-seperator'

		if (selectedScreen === index)
			classes += 'selected-header-option'
		return
	}

	const switchScreen = (index, screen) => {
		let screenComponent = document.getElementById(screen.screen_name)
		if (!screenComponent) return

		screenComponent.scrollIntoView({ behavior: 'smooth' })
		setSelectedScreen(index)
		setShowHeaderOptions(false)
	}


	return (
		<div>
			<div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
				<div className="header-parent">
					<div className="header-hamburger">
						<FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
					</div>
					<div className="header-logo">
						<span>Haseeb~</span>
					</div>
					<div className={
						(showHeaderOptions)
							? 'header-options show-hamburger-options'
							: ' header-options '} >{getHeaderOptions()}</div>
				</div>
			</div>
		</div>
	)
}

export default Header