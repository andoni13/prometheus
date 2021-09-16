import React from 'react';

type CountryDetailProps = {
	data: any;
};

type CountryDetailListProps = {
	children: React.ReactNode;
	title: string;
};

type CountryDetailHeaderProps = {
	name: string;
	url: string;
};

export {CountryDetailProps, CountryDetailHeaderProps, CountryDetailListProps};
