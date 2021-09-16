import 'whatwg-fetch';
import fetchAPIHandler from '../fetchAPI';
import {server} from '../../../../../test/server';

beforeAll(() => {
	jest.spyOn(console, 'error').mockImplementation(() => {
		return null;
	});
	server.listen({onUnhandledRequest: 'error'});
});

beforeEach(() => jest.clearAllMocks());

afterAll(() => {
	console.error.mockRestore();
});

describe('/GET fetchAPI', () => {
	test('throw error when getData api call fails', async () => {
		const errorServiceMock = jest.fn();
		await fetchAPIHandler.fetchData('/test-error', errorServiceMock);
		expect(errorServiceMock).toHaveBeenCalledTimes(1);
	});

	test('returns response when api call fetchData is successfull', async () => {
		const response = await fetchAPIHandler.fetchData('/test');
		expect(response).toEqual({data: 'success'});
	});
});
