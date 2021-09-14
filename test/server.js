import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {handlers} from './HTTPHandler';

const server = setupServer(...handlers);

export {server, rest};
