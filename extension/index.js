'use strict';

module.exports = function (nodecg) {
    try {
		require('./lower_third.js')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load lower third', e.stack);
		process.exit(1);
	}
};
