

class MessageService{
	constructor($http, AppConstants, $rootScope) {
		'ngInject';
		this._$http = $http;
		this.URL = AppConstants.URL + '/usermessage';
		this.sent = [];
		this.inbox = [];
		this.inboxFetched = false;
		this.sentFetched = false;
	}

	fetchToList(){
		return this._$http({
			method: 'GET',
			url: '/kyck-rest/users/contacted'
		}).then((response)=>{
			return response.data.data.map((item)=>item.email);
		});
	}
	
	fetchInbox(){
		if (this.inboxFetched)
		{
			return new Promise((resolve)=>resolve(this.inbox));
		}
		else
		{
			return this._$http({
				method: 'GET',
				url: this.URL + '/get-inbox',
			}).then((response)=>{
				this.inbox = response.data.data;
				this.inboxFetched = true;
				return this.inbox;
			});
		}
	}

	unread(){
		return this._$http({
			method: 'GET',
			url: this.URL + '/unread',
		}).then((response)=>{
			return response.data.data;
		});
	}

	fetchSent(){
		if (this.sentFetched)
		{
			return new Promise((resolve)=>resolve(this.sent));
		}
		else
		{
			return this._$http({
				method: 'GET',
				url: this.URL + '/sent',
			}).then((response)=>{
				this.sent = response.data.data;
				this.sentFetched = true;
				return this.sent;
			});
		}
	}

	getMail(messageId){
		return this._$http({
			method: 'GET',
			url: `${this.URL}/getmail?messageId=${messageId}`,
		}).then((response)=>{
			return (response.data.data);
		});
	}
		
	sendMessage(message, response, forSent){
		let data = {
			messageContent: response,
			messageSubject: message.messageSubject,
			messageToEmail: message.messageToEmail,
			messageToName: message.messageToName
		};

		if (!forSent)
		{
			data.messageToEmail = message.messageFrom;
			data.messageToName = message.messageFromName || "user test";
		}

		return this._$http({
			method: 'POST',
			url: this.URL + '/create',
			data
		});
	}

	refresh(){
		this.inboxFetched = false;
		this.sentFetched = false;
	}
}

export default MessageService;