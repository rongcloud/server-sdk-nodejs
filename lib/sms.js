var apis = require( './apis' );
var rongrequest = require( './rongrequest' );

exports.send = function( region, mobile, templateId, format, callback ) {
	var params = {
		region: region,
		mobile: mobile,
		templateId: templateId
	};

	callback = arguments[arguments.length - 1];

	rongrequest.requestSMS( apis['sms']['send'], params, format, function( err, resultText ) {
		return callback( err, resultText );
	} );
};

exports.sendCode = function( region, mobile, verifyId, verifyCode, templateId, format, callback ) {
	var params;

	if (arguments.length > 5) {
		params = {
			region: region,
			mobile: mobile,
			verifyId: verifyId,
			verifyCode: verifyCode,
			templateId: templateId
		};
	} else {
		templateId = verifyId;
		format = verifyCode;

		params = {
			region: region,
			mobile: mobile,
			templateId: templateId
		};
	}

	callback = arguments[arguments.length - 1];

	rongrequest.requestSMS( apis['sms']['sendCode'], params, format, function( err, resultText ) {
		return callback( err, resultText );
	} );
};

exports.verifyCode = function( sessionId, code, format, callback ) {
	var params = {
		sessionId: sessionId,
		code: code
  };

	callback = arguments[arguments.length - 1];

	rongrequest.requestSMS( apis['sms']['verifyCode'], params, format, function( err, resultText ) {
		return callback( err, resultText );
	} );
};

exports.getImgCode = function( appKey, callback ) {
	var params = {
		appkey: appKey
	}

	rongrequest.get( apis['sms']['getImgCode'], params, function( err, resultText ) {
		return callback( err, resultText );
	} );
};
