function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var _ = require('../../../lodash');
  var result = _.flattenDeep(collection_b);
  result = _.intersection(collection_a, result);
  return result;
}

module.exports = collect_same_elements;
