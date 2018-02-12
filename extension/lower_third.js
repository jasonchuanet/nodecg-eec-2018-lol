'use strict';

module.exports = function (nodecg) {
	const name = nodecg.Replicant('lower_third_name', 		{defaultValue: ''});
	const title = nodecg.Replicant('lower_third_title', 	{defaultValue: ''});


    const toggle   = nodecg.Replicant("lower_third_toggle", {defaultValue: {active: false, disabled: false}});
    const state_3s = nodecg.Replicant("lower_third_3s", 	{defaultValue: {active: false, disabled: false}});
    const state_5s = nodecg.Replicant("lower_third_5s", 	{defaultValue: {active: false, disabled: false}});

	const lock = nodecg.Replicant('lower_third_lock', {defaultValue: false});

	const visibility = nodecg.Replicant('lower_third_vis', {defaultValue: false});

    let buttons = [state_3s, state_5s];

    let timer = null;

    state_3s.on('change', () => {
        if (state_3s.value.active === true) {
            display(3500, state_3s);
        }
    });

    state_5s.on('change', () => {
        if (state_5s.value.active === true) {
            display(5500, state_5s);
        }
    });

    toggle.on('change', () => {
        visibility.value = toggle.value.active;
        lock.value = toggle.value.active;
        disable(buttons, toggle.value.active);
    });

	async function display(this_long, triggering_button) {
        toggle.value.active = true;
        toggle.value.disabled = true;
        await sleep(this_long);
        toggle.value.disabled = false;
        toggle.value.active = false;
        triggering_button.value.active = false;
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function disable(array, toggle) {
        array.forEach(function(element) {
            element.value.disabled = toggle;
        });
    }
};
