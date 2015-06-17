var getNative = require('./getNative');

/** Native method references. */
var WeakMap = getNative(root, 'WeakMap');

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;
