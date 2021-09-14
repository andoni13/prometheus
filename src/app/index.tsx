import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Regions from './views/Regions';
import CountriesList from './views/CountriesList';

const App = (): JSX.Element => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Regions} />
				<Route exact path="/countries" component={CountriesList} />
			</Switch>
		</Router>
	);
};

export default App;
