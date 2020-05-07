import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Logo1 from './Logo.png';

const Logo = () =>
{
	return(
		<div className= 'ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"> <img src={Logo1} alt='lo'/></div>
</Tilt>
		</div>
		);

}

export default Logo;