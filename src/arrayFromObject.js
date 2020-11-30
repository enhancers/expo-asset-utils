Object.defineProperty(exports, '__esModule', { value: true });
exports.default = arrayFromObject;
function arrayFromObject(object) {
  var images = [];
  Object.keys(object).map(function(key) {
    var item = object[key];
    if (typeof item === 'object') {
      images = images.concat(arrayFromObject(item));
    } else {
      images.push(item);
    }
  });
  return images;
}
