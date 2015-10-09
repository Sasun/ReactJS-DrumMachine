import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import NotFoundRoute from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {AppController} from './components/views/AppController';

import {HomeController} from './components/views/HomeController';
import {NotFound} from './components/views/NotFound';

let history = createBrowserHistory()

var routes =  <Router history={history}>
			 	<Route path="/" component={AppController}>
					<IndexRoute component={HomeController}/>
					<NotFoundRoute path="*" component={NotFound}/>
				</Route>
			</Router>;

React.render(routes, document.getElementById('app'));