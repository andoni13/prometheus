import {Error} from '../Error/types';

interface HTTPClientImpl {
	fetchData: (
		endpoint: string,
		errorService: (error: Error) => void,
		options?: RequestInit
	) => Promise<[]>;
}

interface HTTPClient {
	fetchData: (endpoint: string, options?: RequestInit) => Promise<[]>;
}

export {HTTPClient, HTTPClientImpl};
