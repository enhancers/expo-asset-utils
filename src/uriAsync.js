Object.defineProperty(exports, '__esModule', { value: true });
var _resolveAsync = require('./resolveAsync');
var _resolveAsync2 = _interopRequireDefault(_resolveAsync);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var regeneratorRuntime = require('regenerator-runtime');
function uriAsync(fileReference, options) {
  var asset;
  return regeneratorRuntime.async(
    function uriAsync$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _resolveAsync2.default)(fileReference, options));
          case 2:
            asset = _context.sent;
            if (asset) {
              _context.next = 5;
              break;
            }
            throw new Error(
              'expo-asset-utils: uriAsync(): failed to resolve asset: ' + fileReference
            );
          case 5:
            return _context.abrupt('return', asset.localUri);
          case 6:
          case 'end':
            return _context.stop();
        }
      }
    },
    null,
    this
  );
}
exports.default = uriAsync;
