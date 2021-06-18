import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/login/LoginPage';
import './App.scss';

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className="page">
				<Switch>
					<Route component={LoginPage} path="/" exact />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
