'use strict';

module.exports = function (nodecg) {
	const name = nodecg.Replicant('lower_third_name', 		{defaultValue: ''});
	const title = nodecg.Replicant('lower_third_title', 	{defaultValue: ''});

	const toggle = nodecg.Replicant('lower_third_toggle', {defaultValue: false});
	const state_3s = nodecg.Replicant('lower_third_3s', {defaultValue: false});
	const state_5s = nodecg.Replicant('lower_third_5s', {defaultValue: false});

	const lock = nodecg.Replicant('lower_third_lock', {defaultValue: false});

	const visibility = nodecg.Replicant('lower_third_vis', {defaultValue: false});

    toggle.on('change', () => {
        visibility.value = toggle.value;
    });

    state_3s.on('change', () => {
        display(3000);
    });

    state_5s.on('change', () => {
        display(3000);
    });

	async function display(for_this_long) {
        visibility.value = true;
        lock.value = true;
        await sleep(for_this_long);
        visibility.value = false;
        lock.value = false;
	}
};
