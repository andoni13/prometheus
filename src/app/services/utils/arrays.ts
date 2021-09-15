const sortASC = (items: any, index: string): [] => {
	return items.sort((a: any, b: any) => {
		if (a[index] < b[index]) return -1;
		if (a[index] > b[index]) return 1;
		return 0;
	});
};

const sortDSC = (items: any, index: string): [] => {
	return items.sort((a: any, b: any) => {
		if (a[index] > b[index]) return -1;
		if (a[index] < b[index]) return 1;
		return 0;
	});
};

export {sortASC, sortDSC};
