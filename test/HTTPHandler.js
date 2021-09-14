import {rest} from 'msw';

const handlers = [
	rest.get(`/test`, (req, res, ctx) => {
		return res(ctx.json({data: 'success'}));
	}),
	rest.get(`/test-error`, (req, res, ctx) => {
		return res(ctx.status(400), ctx.json({data: 'error'}));
	}),
];

export {handlers};
