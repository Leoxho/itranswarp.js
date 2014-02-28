// _id.js

var util = require('util');
var uuid = require('node-uuid');

module.exports = function() {
    // generate uuid with timestamp:
    var id = util.format('%d%s000', new Date().getTime(), uuid.v4().replace(/\-/g, ''));
    return id.length >= 50 ? id : new Array(50 - id.length + 1).join('0') + id;
}