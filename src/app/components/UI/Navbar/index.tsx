import * as React from 'react';
import style from './Navbar.module.styl';
import {history} from '../../../services/history';

const Navbar = (): JSX.Element => {
	const goHome = () => {
		history.push('/');
	};

	return (
		<div className={style.nav}>
			<div data-testid="logo" className={style.nav__logo} onClick={goHome}>
				Prometheus
			</div>
		</div>
	);
};

export default Navbar;
