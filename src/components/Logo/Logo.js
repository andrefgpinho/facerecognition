import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './faceID.png'
const Logo = () => {
	return (
	<div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
		 <div className="Tilt-inner">
		 	<img alt='logo' src={logo} style={{paddingTop: '22px'}} />
		 </div>
		</Tilt>
	</div>
	)
}

export default Logo;              





 
