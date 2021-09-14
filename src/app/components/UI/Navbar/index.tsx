import * as React from 'react';
import {NavbarProps} from 'app/components/UI/Navbar/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import style from './Navbar.module.styl';

const Navbar = ({goBack, page}: NavbarProps): JSX.Element => {
	return (
		<div className={style.nav}>
			<div
				data-testid="back"
				className={style.nav__backButton}
				onClick={goBack}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</div>
			<div className={style.nav__title}> {page} </div>
		</div>
	);
};

export default Navbar;
