'use strict';

import route from './brokerage.route';
import './brokerage.scss';
import './brokerage.responsive.scss';
import brokerageResource from './brokerage.resource';

const brokerageModule = angular.module('brokerage-module', [
	'ui.router',
	'navigation-module',
	'mdSteppers',
	'material.components.eventCalendar',
	'angAccordion'
	]);

brokerageModule
.config(route)
.factory('BrokerageResource', brokerageResource);

export default brokerageModule;