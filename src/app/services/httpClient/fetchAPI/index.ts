import {Error} from '../../Error/types';

const fetchData = async (
	endpoint: string,
	errorService: (error: Error) => void,
	options?: RequestInit
): Promise<[]> => {
	return fetch(endpoint, options).then(response => {
		if (!response.ok) {
			errorService(response);
		}
		return response.json();
	});
};

const fetchAPIHandler = {
	fetchData,
};

export default fetchAPIHandler;
