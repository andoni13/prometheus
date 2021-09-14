import * as React from 'react';
import PubSub from 'pubsub-js';
import {API_ERROR} from '../../../services/Error/constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {ErrorHandlerProps} from './types';
import style from './ErrorHandler.module.styl';

const ErrorHandler = ({children}: ErrorHandlerProps): JSX.Element => {
	const [error, setError] = React.useState('');

	const handleClose = () => setError('');

	const renderError = (event: string, message: string) => {
		console.log('set error!!');
		setError(message);
	};

	const errorHanlder = () => {
		const error = PubSub.subscribe(API_ERROR, renderError);
		return () => {
			PubSub.unsubscribe(error);
		};
	};

	React.useEffect(errorHanlder, []);

	if (!error) return <> {children} </>;

	return (
		<>
			<div className={style.error} role="alert">
				{error}
				<div
					data-testid="closeError"
					className={style.error__close}
					onClick={handleClose}>
					<FontAwesomeIcon icon={faTimesCircle} />
				</div>
			</div>
			{children}
		</>
	);
};

export default ErrorHandler;
