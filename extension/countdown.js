'use strict';

module.exports = function (nodecg) {
    const seconds = nodecg.Replicant("countdown_seconds", {defaultValue: "0"});
    const countdown_active = nodecg.Replicant("countdown_active", {defaultValue: false});


	var tick = null;

	countdown_active.on('change', () => {
        nodecg.log.warn(countdown_active.value);
		if(countdown_active.value === false){
			clearInterval(tick);
			tick = null;
		}
		if(countdown_active.value === true){
			tick = setInterval(function(){
                seconds.value--;
                nodecg.sendMessage('countdown_update');
            }, 1000);
		}
    });


    seconds.on('change', () => {
        nodecg.sendMessage('countdown_update');
    });

};