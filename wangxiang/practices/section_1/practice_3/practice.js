
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var _ = require('../../../lodash');
  var collection_b = object_b.value;
  result = _.intersection(collection_a, collection_b);
  return result;
}

module.exports = collect_same_elements;
