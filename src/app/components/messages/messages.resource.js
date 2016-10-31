'use strict';

var URL = 'http://ec2-54-255-136-1.ap-southeast-1.compute.amazonaws.com/kyck-rest/usermessage/';

function MessageResource($resource, $rootScope) {
	'ngInject';
    return $resource(URL + 'kyck-rest/usermessage/', {}, {
    	compose: {
    		method: 'GET',
    		isArray: false,
    		url: URL + 'compose'
    	},
    	create: {
    		method: 'POST',
    		params: {
    			userInputMessage: '@content'
    		},
    		url: URL + 'create'
    	},
    	delete: {
    		method: 'GET',
    		isArray: false,
    		params: {
    			messageId: '@id'
    		},
    		url: URL + 'delete'
    	},
    	get: {
            method: 'GET',
            params: {
                messageId: '@id'
            },
            url: URL + 'get',
            isArray: false
        },
        all: {
        	method: 'GET',
        	url: URL + 'get-all',
        	isArray: false
        },
        inbox: {
        	method: 'GET', 
        	isArray: false,
        	url: URL + 'get-inbox'
        },
        mail: {
        	method: 'GET',
        	isArray: false,
        	params: {
        		documentId: '@id'
        	},
        	url: URL + 'getmail'
        },
        sent: {
        	method: 'GET',
        	isArray: false,
        	url: URL + 'sent'
        },
        update: {
        	method: 'POST',
        	isArray: false,
        	url: URL + 'update'
        }
    });
}

export default MessageResource;