'use strict';

import route from './brokerage.route';
import './brokerage.scss';

const brokerageModule = angular.module('brokerage-module', [
	'ui.router',
	'navigation-module',
	'chart.js'
	]);

brokerageModule
.config(route);

export default brokerageModule;