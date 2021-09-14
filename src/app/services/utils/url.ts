const getQueryParam = (param: string): string | null => {
	const params = new URLSearchParams(document.location.search.substring(1));
	return params.get(param);
};

export {getQueryParam};
