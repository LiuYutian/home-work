'use strict';
function compare_collections(collection_a, collection_b) {
  if ((collection_a + '') === (collection_b + '')) {
      return true;
  }else {
      return false;
  }
}
module.exports = compare_collections;
