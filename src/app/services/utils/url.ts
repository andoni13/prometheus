const getQueryParam = (param: string): string | null => {
	const params = new URLSearchParams(document.location.search.substring(1));
	return params.get(param);
};

const updateQueryParams = (query: string, param: string): string | void => {
	const params = new URLSearchParams(document.location.search.substring(1));
	params.set(query, param);
	return params.toString();
};

export {getQueryParam, updateQueryParams};
