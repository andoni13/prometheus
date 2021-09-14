import setHttpClient from './setHttpClient';
import fetchAPIHandler from './fetchAPI';
import errorService from '../Error';

const {fetchData} = setHttpClient(fetchAPIHandler, errorService);

export {fetchData};
