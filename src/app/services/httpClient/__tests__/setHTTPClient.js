import setHttpClient from '../setHttpClient';

describe('Set HttpClient', () => {
	test('httpClient methods snapshot', () => {
		const httpClient = setHttpClient({});
		expect(httpClient).toMatchSnapshot({
			fetchData: expect.any(Function),
		});
	});

	test('httpClient returns methods from injected client', () => {
		const client = {
			fetchData: jest.fn(),
		};

		const errorService = jest.fn();
		const httpClient = setHttpClient(client, errorService);
		const endpoint = 'test';
		const options = {};

		httpClient.fetchData(endpoint, options);
		expect(client.fetchData).toHaveBeenCalledWith(
			endpoint,
			errorService,
			options
		);
		expect(client.fetchData).toHaveBeenCalledTimes(1);
	});
});
