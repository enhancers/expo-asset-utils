Object.defineProperty(exports, '__esModule', { value: true });
var _this = this;
var _expoAsset = require('expo-asset');
var _isReactImageFormat = require('./isReactImageFormat');
var _isReactImageFormat2 = _interopRequireDefault(_isReactImageFormat);
var _fromUriAsync = require('./fromUriAsync');
var _fromUriAsync2 = _interopRequireDefault(_fromUriAsync);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var regeneratorRuntime = require('regenerator-runtime');
var resolveAsync = function resolveAsync(fileReference) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var asset, _asset, output, _asset2;
  return regeneratorRuntime.async(
    function resolveAsync$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            if (!(fileReference instanceof _expoAsset.Asset)) {
              _context.next = 7;
              break;
            }
            if (fileReference.localUri) {
              _context.next = 4;
              break;
            }
            _context.next = 4;
            return regeneratorRuntime.awrap(fileReference.downloadAsync());
          case 4:
            return _context.abrupt('return', fileReference);
          case 7:
            if (!(typeof fileReference === 'string')) {
              _context.next = 17;
              break;
            }
            _context.next = 10;
            return regeneratorRuntime.awrap(
              (0, _fromUriAsync2.default)(fileReference, options.fileName)
            );
          case 10:
            asset = _context.sent;
            if (!asset) {
              _context.next = 15;
              break;
            }
            _context.next = 14;
            return regeneratorRuntime.awrap(resolveAsync(asset));
          case 14:
            return _context.abrupt('return', _context.sent);
          case 15:
            _context.next = 35;
            break;
          case 17:
            if (!(typeof fileReference === 'number')) {
              _context.next = 27;
              break;
            }
            _context.next = 20;
            return regeneratorRuntime.awrap(_expoAsset.Asset.fromModule(fileReference));
          case 20:
            _asset = _context.sent;
            _context.next = 23;
            return regeneratorRuntime.awrap(resolveAsync(_asset));
          case 23:
            output = _context.sent;
            return _context.abrupt('return', output);
          case 27:
            if (!(0, _isReactImageFormat2.default)(fileReference)) {
              _context.next = 35;
              break;
            }
            _context.next = 30;
            return regeneratorRuntime.awrap(
              (0, _fromUriAsync2.default)(fileReference.uri, options.fileName)
            );
          case 30:
            _asset2 = _context.sent;
            if (!_asset2) {
              _context.next = 35;
              break;
            }
            _context.next = 34;
            return regeneratorRuntime.awrap(resolveAsync(_asset2));
          case 34:
            return _context.abrupt('return', _context.sent);
          case 35:
          case 'end':
            return _context.stop();
        }
      }
    },
    null,
    _this
  );
};
exports.default = resolveAsync;
