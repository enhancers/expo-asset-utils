Object.defineProperty(exports, '__esModule', { value: true });
var _expoFileSystem = require('expo-file-system');
var _uriAsync = require('./uriAsync');
var _uriAsync2 = _interopRequireDefault(_uriAsync);
var _replaceNameInUri = require('./replaceNameInUri');
var _replaceNameInUri2 = _interopRequireDefault(_replaceNameInUri);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var regeneratorRuntime = require('regenerator-runtime');
function copyAssetToSameDirectoryWithNewNameAsync(fileReference, name) {
  var url, nextUrl;
  return regeneratorRuntime.async(
    function copyAssetToSameDirectoryWithNewNameAsync$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _uriAsync2.default)(fileReference));
          case 2:
            url = _context.sent;
            nextUrl = (0, _replaceNameInUri2.default)(url, name);
            _context.next = 6;
            return regeneratorRuntime.awrap(
              (0, _expoFileSystem.copyAsync)({ from: url, to: nextUrl })
            );
          case 6:
            return _context.abrupt('return', nextUrl);
          case 7:
          case 'end':
            return _context.stop();
        }
      }
    },
    null,
    this
  );
}
exports.default = copyAssetToSameDirectoryWithNewNameAsync;
