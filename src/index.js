Object.defineProperty(exports, '__esModule', { value: true });
var _AssetUtils = require('./AssetUtils');
Object.keys(_AssetUtils).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AssetUtils[key];
    },
  });
});
var AssetUtils = _interopRequireWildcard(_AssetUtils);
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
exports.default = AssetUtils;
