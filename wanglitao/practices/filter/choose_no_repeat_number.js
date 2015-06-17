'use strict';

function choose_no_repeat_number(collection) {
    var _ = require("../../lodash.js");

    return _(collection).no_repeat().value();

}
module.exports = choose_no_repeat_number;
