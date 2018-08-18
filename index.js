function getParam (key) {
	
	let urlString = window.location.search;

	if ( urlString !== '' && urlString.indexOf(key) > -1 ) {

		let queryParams = urlString.substr(1).split('&');
		let codeArray = queryParams.filter((param) => {
			return param.indexOf(key+'=') > -1;
		});
		let code = codeArray && codeArray[0] && codeArray[0].split('=')[1];

		return code;

	}
	return null;
}

module.exports.getParam = getParam;