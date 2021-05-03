# flexible-axios
A library of http request based on [axios](https://github.com/axios/axiosÂ) that supports the browser and node.js.

## Install
### Using npm
```bash
npm install flexible-axios --save
```

## Usage
### CommonJS usage
```
const flexibleAxios = require('flexible-axios')
```

## Method
### Get request

flexibleAxios.get(url, config)
- {String} url => request url.(required)
- {Object} config => request config.(optional). Including headers|timeout, etc. Default value is null, further information can be queried related document https://axios-http.com/docs/req_config


### Post request

flexibleAxios.post(url, data, config)
- {String} url => request url.(required)
- {Object} data => request data.(optional). Default value is null.
- {Object} config => request config.(optional). Including headers|timeout, etc. Default value is null, further information can be queried related document https://axios-http.com/docs/req_config

#### Notice
Post request set default Content-Type is 'application/json'. If you want to rewrite Content-Type, let's see it:
```
flexibleAxios.post(url, data, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
```

### Upload file Method(Specail instance of post method)

flexibleAxios.uploadFile(url, formData)
- {String} url => request url.(required)
- {Object} formData => FormData object, support binary file and other key-value data. You can use native [FormData](https://developer.cdn.mozilla.net/en-US/docs/Web/API/FormData) in the browser environment, use [form-data](https://github.com/form-data/form-data) module in nodejs environment.(required)

### Set http header key

flexibleAxios.setHeader(key, value)
- {String} key => key name.(required)
- {String} value => value.(required)

## License
flexible-axios is [MIT licensed](https://github.com/AmoyDreamer/flexible-axios/blob/master/LICENSE).
