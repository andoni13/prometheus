import {sortASC, sortDSC} from '../arrays';

describe('arrays utils', () => {
	it('sorts in asc order an array of objects by index', () => {
		const items = [{name: 'a'}, {name: 'c'}, {name: 'b'}];
		const result = sortASC(items, 'name');
		const expected = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
		expect(result).toEqual(expected);
	});
	it('sorts in dsc order an array of objects by index', () => {
		const items = [{name: 'a'}, {name: 'c'}, {name: 'b'}];
		const result = sortDSC(items, 'name');
		const expected = [{name: 'c'}, {name: 'b'}, {name: 'a'}];
		expect(result).toEqual(expected);
	});
});
