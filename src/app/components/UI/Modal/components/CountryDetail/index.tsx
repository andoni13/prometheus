import * as React from 'react';
import {CountryDetailProps} from './types';
import style from './CountryDetail.module.styl';
import CountryDetailItem from './CountryDetailItem';
import CountryDetailList from './CountryDetailList';

const CountryDetail = ({data}: CountryDetailProps): JSX.Element => {
	return (
		<div className={style.modal__body}>
			<CountryDetailList title="General">
				<CountryDetailItem title="Capital">
					{data.capital || '-'}
				</CountryDetailItem>
				<CountryDetailItem title="Languages">
					{data.languages.map((language: any, index: number, self: []) => {
						return self.length - 1 === index
							? language.name || '-'
							: `${language.name || '-'}, `;
					})}
				</CountryDetailItem>
				<CountryDetailItem title="Region">{data.region}</CountryDetailItem>
				<CountryDetailItem title="Subregion">
					{data.subregion || '-'}
				</CountryDetailItem>
				<CountryDetailItem title="Demonym">{data.demonym}</CountryDetailItem>
				<CountryDetailItem title="Native Name">
					{data.nativeName || '-'}
				</CountryDetailItem>
			</CountryDetailList>
			<CountryDetailList title="Geography">
				<CountryDetailItem title="Population">
					{new Intl.NumberFormat('en-US').format(data.population) || '-'}
				</CountryDetailItem>
				<CountryDetailItem title="Area">
					{new Intl.NumberFormat('en-US').format(data.area) || '-'}
				</CountryDetailItem>
				<CountryDetailItem title="Coordinates">
					{data.latlng.join(', ') || '-'}
				</CountryDetailItem>
				<CountryDetailItem title="Borders">
					{data.borders.join(', ') || '-'}
				</CountryDetailItem>
			</CountryDetailList>
			<CountryDetailList title="Economy">
				<CountryDetailItem title="Currency">
					{data.currencies.map(
						(currency: any) => `(${currency.symbol}) ${currency.name}`
					)}
				</CountryDetailItem>
			</CountryDetailList>
			<CountryDetailList title="Extras">
				<CountryDetailItem title="Top Level Domains">
					{data.topLevelDomain.join(', ') || '-'}
				</CountryDetailItem>
				<CountryDetailItem title="Calling Codes">
					{data.callingCodes.join(', ') || '-'}
				</CountryDetailItem>
				<CountryDetailItem title="Timezones">
					{data.timezones.join(', ') || '-'}
				</CountryDetailItem>
			</CountryDetailList>
		</div>
	);
};

export default CountryDetail;
