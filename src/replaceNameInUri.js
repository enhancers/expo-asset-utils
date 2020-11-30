Object.defineProperty(exports, '__esModule', { value: true });
var _filenameFromUri = require('./filenameFromUri');
var _filenameFromUri2 = _interopRequireDefault(_filenameFromUri);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function replaceNameInUri(url, filename) {
  var originalName = (0, _filenameFromUri2.default)(url);
  return url.replace(originalName, filename);
}
exports.default = replaceNameInUri;
