function takeElement(element) {
  return element.key ;
}

function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var _ = require('../../../lodash');
  var result = _.map(collection_a, takeElement);
  var collection_b = object_b.value;
  result = _.intersection(result, collection_b);
  return result;
}

module.exports = collect_same_elements;
