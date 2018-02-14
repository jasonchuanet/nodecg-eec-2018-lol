'use strict';

module.exports = function (nodecg) {
    try {
		require('./lower_third.js')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load lower third backend', e.stack);
		process.exit(1);
	}
	try {
		require('./countdown.js')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load countdown clock backend', e.stack);
		process.exit(1);
	}
};
