import {API_ERROR, API_ERROR_MESSAGE} from './constants';
import PubSub from 'pubsub-js';
import {Error} from './types';

const errorService = (error: Error): void => {
	// TODO: change to a switch statement once there are more errors to show
	if (error?.status === 404) {
		PubSub.publish(API_ERROR, API_ERROR_MESSAGE);
	}
};

export default errorService;
