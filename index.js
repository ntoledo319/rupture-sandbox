exports.handler = async (event) => { const assert = require('assert'); assert.equal(event.key, 'value'); return 'ok'; };
