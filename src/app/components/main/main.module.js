'use strict';

import DashboardModule from './dashboard/dashboard.module';
import CalendarModule from './calendar/calendar.module';
import BrokerageModule from './brokerage/brokerage.module';
import HelpModule from './help/help.module';
import NavigationModule from './navigation/navigation.module';
import ToolbarModule from './toolbar/toolbar.module';
import DocumentModule from './documents/document.module';
import ProgressModule from './progress/progress.module';
import DashboardCalendarModule from './dashboard-calendar/calendar.module';
import MessagesModule from './messages/messages.module';
import ProfileFormModule from './profile-form/profileform.module';
import KYCFormModule from './kyc-form/kycform.module';
import MiniCalendarModule from './mini-calendar/miniCalendar.module';
import SelectSlotModule from './select-slot/selectslot.module';
import SettingsModule from './settings/settings.module';
import BlockChainModule from './blockchain/blockchain.module';
import route from './main.route';
import './main.scss';

const mainModule = angular.module('main-module', [
	'ui.router',
	BlockChainModule.name,
	NavigationModule.name,
	DashboardModule.name,
	CalendarModule.name,
	HelpModule.name,
	BrokerageModule.name,
	ToolbarModule.name,
	DocumentModule.name,
	ProgressModule.name,
	DashboardCalendarModule.name,
	MessagesModule.name,
	SettingsModule.name,
	ProfileFormModule.name,
	KYCFormModule.name,
	MiniCalendarModule.name,
	SelectSlotModule.name
	]);

mainModule
.config(route);

export default mainModule;