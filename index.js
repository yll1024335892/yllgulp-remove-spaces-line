'use strict'
const through = require('through2')
const fs = require('fs')

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			console.log('Streaming not supported');
			return;
		}

		const fileReg = /\s(?=\s)/gi;
		let data = file.contents.toString();
		let dataReplace = data.replace(fileReg, "");
		file.contents = new Buffer(dataReplace)
		cb(null, file)
	})
}