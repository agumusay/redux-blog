import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import data from './data.json';
import { Menu, Image, Icon } from 'semantic-ui-react';

function App() {
	function markUp() {
		return (
			<Router>
				<Menu pointing secondary>
					<Menu.Header href='/'>
						<Icon name='home' size='big' color='teal' />
					</Menu.Header>
					<Menu.Header content={<h2>Awesome Blog</h2>} />
				</Menu>

				<Image>
					<img alt='' src='https://loremflickr.com/910/240/antalya?lock=20' />
				</Image>

				<Switch>
					<Route path={'/:slug'} render={props => <ProductDetails {...props} />} />
					<Route path='/' render={props => <Home data={data} {...props} />} />
				</Switch>
			</Router>
		);
	}
	return markUp();
}

export default App;
