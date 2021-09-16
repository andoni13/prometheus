import * as React from 'react';
import PubSub from 'pubsub-js';
import SortableList from '../../components/UI/SortableList';
import {getQueryParam} from '../../services/utils/url';
import {fetchData} from '../../services/httpClient';
import {API_ERROR, CLEAR_ERROR} from 'app/services/Error/constants';
import {LIST_ITEMS} from 'app/views/CountriesList/constants';
import style from './CountriesList.module.styl';
import {RouteComponentProps} from 'react-router-dom';
import Modal from 'app/components/UI/Modal';
// eslint-disable-next-line max-len
import ModalHeader from '../../components/UI/Modal/components/CountryDetail/ModalHeader';
import CountryDetail from '../../components/UI/Modal/components/CountryDetail';

const CountriesList = ({
	history,
	location,
	match,
}: RouteComponentProps<any>): JSX.Element => {
	const region = getQueryParam('region');
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [row, setRow] = React.useState({} as any);
	const [countries, setCountries] = React.useState([]);

	const init = () => {
		return () => {
			PubSub.publish(API_ERROR, CLEAR_ERROR);
		};
	};

	const fetchCountries = () => {
		fetchData(`${process.env.COUNTRIES_API_BASE_URL}region/${region}`).then(
			(response: []) => setCountries(response)
		);
	};

	const handleModal = (isOpen: boolean, data?: any) => () => {
		if (data) setRow(data);
		setIsModalOpen(isOpen);
	};

	React.useEffect(init, []);
	React.useEffect(fetchCountries, []);

	return (
		<>
			<div className={style.countries}>
				<SortableList
					history={history}
					items={countries}
					listInfoItems={LIST_ITEMS}
					location={location}
					match={match}
					handleRow={handleModal}
					title={region}
				/>
			</div>

			<Modal
				isOpen={isModalOpen}
				title={<ModalHeader name={row.name} url={row.flag} />}
				handleClose={handleModal(false)}>
				<CountryDetail data={row} />
			</Modal>
		</>
	);
};

export default CountriesList;
