import React from 'react'

const profile = () => {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="col">
						<a href="https://github.com/Haseeb-creator" target={'_blank'} >
							<i className="fa fa-github"></i>
						</a>
						<a href="https://www.linkedin.com/in/haseeb12/" target={'_blank'}>
							<i className="fa fa-linkedin-square" ></i>
						</a>
						<a href="https://www.instagram.com/md_haseeb_/" target={'_blank'}>
							<i className="fa fa-instagram"></i>
						</a>
						<a href="https://api.whatsapp.com/send?phone=919902416190" target={'_blank'}>
							<i className="fa fa-whatsapp"></i>
						</a>
					</div>
				</div>
			</div>

		</div>
	)
}

export default profile