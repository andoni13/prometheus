import * as React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Regions from './views/Regions';
import CountriesList from './views/CountriesList';
import ErrorHandler from 'app/components/UI/ErrorHandler';
import Navbar from 'app/components/UI/Navbar';
import {history} from './services/history';

const App = (): JSX.Element => {
	return (
		<Router history={history}>
			<Switch>
				<>
					<Navbar />
					<ErrorHandler>
						<Route exact path="/" component={Regions} />
						<Route exact path="/countries" component={CountriesList} />
					</ErrorHandler>
				</>
			</Switch>
		</Router>
	);
};

export default App;
