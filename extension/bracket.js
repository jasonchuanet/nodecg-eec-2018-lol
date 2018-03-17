'use strict';

module.exports = function (nodecg) {
    //layer 3 winners input and toggle and lock
    const w2i_00 = nodecg.Replicant("w2i_00");
    const w2w_00 = nodecg.Replicant("w2w_00", {defaultValue: false});
    const w2i_01 = nodecg.Replicant("w2i_01");
    const w2w_01 = nodecg.Replicant("w2w_01", {defaultValue: false});
    const w2i_02 = nodecg.Replicant("w2i_02");
    const w2w_02 = nodecg.Replicant("w2w_02", {defaultValue: false});
    const w2i_03 = nodecg.Replicant("w2i_03");
    const w2w_03 = nodecg.Replicant("w2w_03", {defaultValue: false});
    const w2i_04 = nodecg.Replicant("w2i_04");
    const w2w_04 = nodecg.Replicant("w2w_04", {defaultValue: false});
    const w2i_05 = nodecg.Replicant("w2i_05");
    const w2w_05 = nodecg.Replicant("w2w_05", {defaultValue: false});
    const w2i_06 = nodecg.Replicant("w2i_06");
    const w2w_06 = nodecg.Replicant("w2w_06", {defaultValue: false});
    const w2i_07 = nodecg.Replicant("w2i_07");
    const w2w_07 = nodecg.Replicant("w2w_07", {defaultValue: false});
    const w2i_08 = nodecg.Replicant("w2i_08");
    const w2w_08 = nodecg.Replicant("w2w_08", {defaultValue: false});
    const w2i_09 = nodecg.Replicant("w2i_09");
    const w2w_09 = nodecg.Replicant("w2w_09", {defaultValue: false});
    const w2i_10 = nodecg.Replicant("w2i_10");
    const w2w_10 = nodecg.Replicant("w2w_10", {defaultValue: false});
    const w2i_11 = nodecg.Replicant("w2i_11");
    const w2w_11 = nodecg.Replicant("w2w_11", {defaultValue: false});
    const w2i_12 = nodecg.Replicant("w2i_12");
    const w2w_12 = nodecg.Replicant("w2w_12", {defaultValue: false});
    const w2i_13 = nodecg.Replicant("w2i_13");
    const w2w_13 = nodecg.Replicant("w2w_13", {defaultValue: false});
    const w2i_14 = nodecg.Replicant("w2i_14");
    const w2w_14 = nodecg.Replicant("w2w_14", {defaultValue: false});
    const w2i_15 = nodecg.Replicant("w2i_15");
    const w2w_15 = nodecg.Replicant("w2w_15", {defaultValue: false});

    const w2l_0 = nodecg.Replicant("w2l_0", {defaultValue: true});
    const w2l_1 = nodecg.Replicant("w2l_1", {defaultValue: true});
    const w2l_2 = nodecg.Replicant("w2l_2", {defaultValue: true});
    const w2l_3 = nodecg.Replicant("w2l_3", {defaultValue: true});
    const w2l_4 = nodecg.Replicant("w2l_4", {defaultValue: true});
    const w2l_5 = nodecg.Replicant("w2l_5", {defaultValue: true});
    const w2l_6 = nodecg.Replicant("w2l_6", {defaultValue: true});
    const w2l_7 = nodecg.Replicant("w2l_7", {defaultValue: true});

    //layer 2 winners input and toggle and lock
    const w1i_00 = nodecg.Replicant("w1i_00");
    const w1w_00 = nodecg.Replicant("w1w_00", {defaultValue: false});
    const w1i_01 = nodecg.Replicant("w1i_01");
    const w1w_01 = nodecg.Replicant("w1w_01", {defaultValue: false});
    const w1i_02 = nodecg.Replicant("w1i_02");
    const w1w_02 = nodecg.Replicant("w1w_02", {defaultValue: false});
    const w1i_03 = nodecg.Replicant("w1i_03");
    const w1w_03 = nodecg.Replicant("w1w_03", {defaultValue: false});
    const w1i_04 = nodecg.Replicant("w1i_04");
    const w1w_04 = nodecg.Replicant("w1w_04", {defaultValue: false});
    const w1i_05 = nodecg.Replicant("w1i_05");
    const w1w_05 = nodecg.Replicant("w1w_05", {defaultValue: false});
    const w1i_06 = nodecg.Replicant("w1i_06");
    const w1w_06 = nodecg.Replicant("w1w_06", {defaultValue: false});
    const w1i_07 = nodecg.Replicant("w1i_07");
    const w1w_07 = nodecg.Replicant("w1w_07", {defaultValue: false});

    const w1l_0 = nodecg.Replicant("w1l_0", {defaultValue: true});
    const w1l_1 = nodecg.Replicant("w1l_1", {defaultValue: true});
    const w1l_2 = nodecg.Replicant("w1l_2", {defaultValue: true});
    const w1l_3 = nodecg.Replicant("w1l_3", {defaultValue: true});

    //layer 1 winners input and toggle and lock
    const w0i_00 = nodecg.Replicant("w0i_00");
    const w0w_00 = nodecg.Replicant("w0w_00", {defaultValue: false});
    const w0i_01 = nodecg.Replicant("w0i_01");
    const w0w_01 = nodecg.Replicant("w0w_01", {defaultValue: false});
    const w0i_02 = nodecg.Replicant("w0i_02");
    const w0w_02 = nodecg.Replicant("w0w_02", {defaultValue: false});
    const w0i_03 = nodecg.Replicant("w0i_03");
    const w0w_03 = nodecg.Replicant("w0w_03", {defaultValue: false});

    const w0l_0 = nodecg.Replicant("w0l_0", {defaultValue: true});
    const w0l_1 = nodecg.Replicant("w0l_1", {defaultValue: true});

    //layer 3 losers input and toggle and lock
    const l5i_00 = nodecg.Replicant("l5i_00");
    const l5w_00 = nodecg.Replicant("l5w_00", {defaultValue: false});
    const l5i_01 = nodecg.Replicant("l5i_01");
    const l5w_01 = nodecg.Replicant("l5w_01", {defaultValue: false});
    const l5i_02 = nodecg.Replicant("l5i_02");
    const l5w_02 = nodecg.Replicant("l5w_02", {defaultValue: false});
    const l5i_03 = nodecg.Replicant("l5i_03");
    const l5w_03 = nodecg.Replicant("l5w_03", {defaultValue: false});
    const l5i_04 = nodecg.Replicant("l5i_04");
    const l5w_04 = nodecg.Replicant("l5w_04", {defaultValue: false});
    const l5i_05 = nodecg.Replicant("l5i_05");
    const l5w_05 = nodecg.Replicant("l5w_05", {defaultValue: false});
    const l5i_06 = nodecg.Replicant("l5i_06");
    const l5w_06 = nodecg.Replicant("l5w_06", {defaultValue: false});
    const l5i_07 = nodecg.Replicant("l5i_07");
    const l5w_07 = nodecg.Replicant("l5w_07", {defaultValue: false});

    const l5l_0 = nodecg.Replicant("l5l_0", {defaultValue: true});
    const l5l_1 = nodecg.Replicant("l5l_1", {defaultValue: true});
    const l5l_2 = nodecg.Replicant("l5l_2", {defaultValue: true});
    const l5l_3 = nodecg.Replicant("l5l_3", {defaultValue: true});

    //layer 4 losers input and toggle and lock
    const l4i_00 = nodecg.Replicant("l4i_00");
    const l4w_00 = nodecg.Replicant("l4w_00", {defaultValue: false});
    const l4i_01 = nodecg.Replicant("l4i_01");
    const l4w_01 = nodecg.Replicant("l4w_01", {defaultValue: false});
    const l4i_02 = nodecg.Replicant("l4i_02");
    const l4w_02 = nodecg.Replicant("l4w_02", {defaultValue: false});
    const l4i_03 = nodecg.Replicant("l4i_03");
    const l4w_03 = nodecg.Replicant("l4w_03", {defaultValue: false});
    const l4i_04 = nodecg.Replicant("l4i_04");
    const l4w_04 = nodecg.Replicant("l4w_04", {defaultValue: false});
    const l4i_05 = nodecg.Replicant("l4i_05");
    const l4w_05 = nodecg.Replicant("l4w_05", {defaultValue: false});
    const l4i_06 = nodecg.Replicant("l4i_06");
    const l4w_06 = nodecg.Replicant("l4w_06", {defaultValue: false});
    const l4i_07 = nodecg.Replicant("l4i_07");
    const l4w_07 = nodecg.Replicant("l4w_07", {defaultValue: false});

    const l4l_0 = nodecg.Replicant("l4l_0", {defaultValue: true});
    const l4l_1 = nodecg.Replicant("l4l_1", {defaultValue: true});
    const l4l_2 = nodecg.Replicant("l4l_2", {defaultValue: true});
    const l4l_3 = nodecg.Replicant("l4l_3", {defaultValue: true});

    //layer 3 losers input and toggle and lock
    const l3i_00 = nodecg.Replicant("l3i_00");
    const l3w_00 = nodecg.Replicant("l3w_00", {defaultValue: false});
    const l3i_01 = nodecg.Replicant("l3i_01");
    const l3w_01 = nodecg.Replicant("l3w_01", {defaultValue: false});
    const l3i_02 = nodecg.Replicant("l3i_02");
    const l3w_02 = nodecg.Replicant("l3w_02", {defaultValue: false});
    const l3i_03 = nodecg.Replicant("l3i_03");
    const l3w_03 = nodecg.Replicant("l3w_03", {defaultValue: false});

    const l3l_0 = nodecg.Replicant("l3l_0", {defaultValue: true});
    const l3l_1 = nodecg.Replicant("l3l_1", {defaultValue: true});
    
    //layer 2 losers input and toggle and lock
    const l2i_00 = nodecg.Replicant("l2i_00");
    const l2w_00 = nodecg.Replicant("l2w_00", {defaultValue: false});
    const l2i_01 = nodecg.Replicant("l2i_01");
    const l2w_01 = nodecg.Replicant("l2w_01", {defaultValue: false});
    const l2i_02 = nodecg.Replicant("l2i_02");
    const l2w_02 = nodecg.Replicant("l2w_02", {defaultValue: false});
    const l2i_03 = nodecg.Replicant("l2i_03");
    const l2w_03 = nodecg.Replicant("l2w_03", {defaultValue: false});

    const l2l_0 = nodecg.Replicant("l2l_0", {defaultValue: true});
    const l2l_1 = nodecg.Replicant("l2l_1", {defaultValue: true});

    //layer 1 losers input and toggle and lock
    const l1i_00 = nodecg.Replicant("l1i_00");
    const l1w_00 = nodecg.Replicant("l1w_00", {defaultValue: false});
    const l1i_01 = nodecg.Replicant("l1i_01");
    const l1w_01 = nodecg.Replicant("l1w_01", {defaultValue: false});

    const l1l_0 = nodecg.Replicant("l1l_0", {defaultValue: true});

    //layer 0 losers input and toggle and lock
    const l0i_00 = nodecg.Replicant("l0i_00");
    const l0w_00 = nodecg.Replicant("l0w_00", {defaultValue: false});
    const l0i_01 = nodecg.Replicant("l0i_01");
    const l0w_01 = nodecg.Replicant("l0w_01", {defaultValue: false});

    const l0l_0 = nodecg.Replicant("l0l_0", {defaultValue: true});

    //layer 1 losers input and toggle and lock
    const f1i_00 = nodecg.Replicant("f1i_00");
    const f1w_00 = nodecg.Replicant("f1w_00", {defaultValue: false});
    const f1i_01 = nodecg.Replicant("f1i_01");
    const f1w_01 = nodecg.Replicant("f1w_01", {defaultValue: false});

    const f1l_0 = nodecg.Replicant("f1l_0", {defaultValue: true});

    //layer 0 losers input and toggle and lock
    const f0i_00 = nodecg.Replicant("f0i_00");
    const f0w_00 = nodecg.Replicant("f0w_00", {defaultValue: false});
    const f0i_01 = nodecg.Replicant("f0i_01");
    const f0w_01 = nodecg.Replicant("f0w_01", {defaultValue: false});

    const f0l_0 = nodecg.Replicant("f0l_0", {defaultValue: true});

    //layer 2 losers input and toggle and lock
    const f2i_00 = nodecg.Replicant("f2i_00");
    const f2w_00 = nodecg.Replicant("f2w_00", {defaultValue: false});
    const f2i_01 = nodecg.Replicant("f2i_01");
    const f2w_01 = nodecg.Replicant("f2w_01", {defaultValue: false});

    const f2l_0 = nodecg.Replicant("f2l_0", {defaultValue: true});


    //A place for losers 
    let sorry = {value: null};
    

    //Determin winners and loosers bracket 

    //Winners layer 2
    w2l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w2w_00, w2i_00, w2w_01, w2i_01, w1i_00, l5i_00);
        }
    });

    w2l_1.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w2w_02, w2i_02, w2w_03, w2i_03, w1i_01, l5i_01);
        }
    });

    w2l_2.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w2w_04, w2i_04, w2w_05, w2i_05, w1i_02, l5i_02);
        }
    });

    w2l_3.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w2w_06, w2i_06, w2w_07, w2i_07, w1i_03, l5i_03);
        }
    });
    
    w2l_4.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w2w_08, w2i_08, w2w_09, w2i_09, w1i_04, l5i_04);
        }
    });

    w2l_5.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w2w_10, w2i_10, w2w_11, w2i_11, w1i_05, l5i_05);
        }
    });
    
    w2l_6.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w2w_12, w2i_12, w2w_13, w2i_13, w1i_06, l5i_06);
        }
    });

    w2l_7.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w2w_14, w2i_14, w2w_15, w2i_15, w1i_07, l5i_07);
        }
    });
    
    

    //Winners layer 1
    w1l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w1w_00, w1i_00, w1w_01, w1i_01, w0i_00, l4i_00);
        }
    });

    w1l_1.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w1w_02, w1i_02, w1w_03, w1i_03, w0i_01, l4i_02);
        }
    });

    w1l_2.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w1w_04, w1i_04, w1w_05, w1i_05, w0i_02, l4i_04);
        }
    });
    
    w1l_3.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w1w_06, w1i_06, w1w_07, w1i_07, w0i_03, l4i_06);
        }
    });

    //Winners layer 0
    w0l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w0w_00, w0i_00, w0w_01, w0i_01, f1i_00, l2i_00);
        }
    }); 

    w0l_1.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(w0w_02, w0i_02, w0w_03, w0i_03, f1i_01, l2i_02);
        }
    }); 

    //Losers layer 5
    l5l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l5w_00, l5i_00, l5w_01, l5i_01, l4i_01, sorry);
        }
    }); 

    l5l_1.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l5w_02, l5i_02, l5w_03, l5i_03, l4i_03, sorry);
        }
    });

    l5l_2.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l5w_04, l5i_04, l5w_05, l5i_05, l4i_05, sorry);
        }
    });

    l5l_3.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l5w_06, l5i_06, l5w_07, l5i_07, l4i_07, sorry);
        }
    });

    //Losers layer 4
    l4l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l4w_00, l4i_00, l4w_01, l4i_01, l3i_00, sorry);
        }
    }); 
    l4l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l4w_02, l4i_02, l4w_03, l4i_03, l3i_01, sorry);
        }
    }); 
    l4l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l4w_04, l4i_04, l4w_05, l4i_05, l3i_02, sorry);
        }
    }); 
    l4l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l4w_06, l4i_06, l4w_07, l4i_07, l3i_03, sorry);
        }
    }); 

    //Losers layer 3
    l3l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l3w_00, l3i_00, l3w_01, l3i_01, l3i_01, sorry);
        }
    }); 
    l3l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l3w_02, l3i_02, l3w_03, l3i_03, l3i_03, sorry);
        }
    }); 

    //Losers layer 2
    l2l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l2w_00, l2i_00, l2w_01, l2i_01, l1i_00, sorry);
        }
    }); 
    l2l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l2w_02, l2i_02, l2w_03, l2i_03, l1i_01, sorry);
        }
    }); 

    //Losers layer 1
    l1l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l1w_00, l1i_00, l1w_01, l1i_01, l0i_01, sorry);
        }
    }); 

    //Losers layer 0
    l0l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(l0w_00, l0i_00, l0w_01, l0i_01, f0i_01, sorry);
        }
    }); 

    //Finals layer 1 (Semifinals)
    f1l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(f1w_00, f1i_00, f1w_01, f1i_01, l0i_00, f0i_00);
        }
    }); 

    //Finals layer 0 Finals
    f0l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(f0w_00, f0i_00, f0w_01, f0i_01, f2i_00, f2i_01);
        }
    }); 

    //Finals layer 2 IDK
    f2l_0.on('change', (new_value, old_value) => {
        if (new_value = true) {
            round(f2w_00, f2i_00, f2w_01, f2i_01, sorry, sorry);
        }
    }); 


    //The match logic, given winner, loser, and destinations
    function round(p1_toggle, p1_input, p2_toggle, p2_input, winner_dest, looser_dest){
        if (p1_toggle.value && p2_toggle.value) {
            p1_toggle.value = false;
            p2_toggle.value = false;
        } 
        if (!p1_toggle.value && !p2_toggle.value){
            winner_dest.value = null;
            looser_dest.value = null;
        }
        if (p1_toggle.value) {
            //p2_toggle.value = false;
            winner_dest.value = p1_input.value;
            looser_dest.value = p2_input.value;
        }
        if (p2_toggle.value) {
            //p1_toggle.value = false;
            winner_dest.value = p2_input.value;
            looser_dest.value = p1_input.value;
        }
    }
};