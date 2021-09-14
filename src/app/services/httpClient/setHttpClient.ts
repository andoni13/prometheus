import {HTTPClient, HTTPClientImpl} from 'app/services/httpClient/types';
import {Error} from 'app/services/Error/types';

/**
 * Abstract function to initialize an httpClient
 * **/

const setHttpClient = (
	httpClient: HTTPClientImpl,
	errorService: (error: Error) => void
): HTTPClient => ({
	fetchData(endpoint: string, options?: RequestInit) {
		return httpClient.fetchData(endpoint, errorService, options);
	},
	//post, put, delete... implementations
});

export default setHttpClient;
