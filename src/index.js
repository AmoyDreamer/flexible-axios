/**
 * @author Allen Liu
 * @desc A library of http request based on axios.
 */
'use strict';
var axios = require('axios');
/**
 * @desc Determine if we're running in a standard nodejs environment
 */
function isStandardNodejsEnv() {
	return typeof window === 'undefined' && typeof document === 'undefined' && typeof global === 'object';
}
//axios instance
var instance = axios.create({
	timeout: 20000//default 20 seconds
});
//set post method default Content-Type is application/json
instance.defaults.headers.post['Content-Type'] = 'application/json';
//http request interceptor
instance.interceptors.request.use(function(config) {
	return config;
}, function(err) {
	return Promise.reject(err);
});
//http response interceptor
instance.interceptors.response.use(function(response) {
	return response.status == 200 && response.data ? response.data : null;
}, function(err) {
	return Promise.reject(err);
});
//module object
var flexibleAxios = {
	/**
	 * @desc Set http header key
	 * @param {String} key => key name.(required)
	 * @param {String} value => value.(required)
	 */
	setHeader: function(key, value) {
		instance.defaults.headers.common[key] = value;
	},
	/**
	 * @desc Get method
	 * @param {String} url => request url.(required)
	 * @param {Object} config => request config.(optional). Including headers|timeout, etc. Default value is null, further information can be queried related documents https://axios-http.com/docs/req_config
	**/
	get: function(url, config=null) {
		return instance.get(url, config);
	},
	/**
	 * @desc Post method
	 * @param {String} url => request url.(required)
	 * @param {Object} data => request data.(optional). Default value is null.
	 * @param {Object} config => request config.(optional). Including headers|timeout, etc. Default value is null, further information can be queried related documents https://axios-http.com/docs/req_config
	 */
	post: function(url, data=null, config=null) {
		return instance.post(url, data, config);
	},
	/**
	 * @desc Upload file Method(Specail instance of post method),
	 * @param {String} url => request url.(required)
	 * @param {Object} formData => FormData object, support binary file and other key-value data.(required)
	 */
	uploadFile: function(url, formData) {
		var config = {
			method: 'post',
			url: url,
			data: formData,
			timeout: 30000
		};
		//Nodejs environment, the formdata instance from 'form-data' module
		if (isStandardNodejsEnv() && typeof formData.getHeaders === 'function') {
			config = {
				...config,
				headers: formData.getHeaders()
			};
		}
		return instance.request(config);
	}
}
module.exports = flexibleAxios
