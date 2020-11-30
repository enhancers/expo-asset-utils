Object.defineProperty(exports, '__esModule', { value: true });
var _expoAsset = require('expo-asset');
var _ImageUtils = require('./ImageUtils');
var _fileInfoAsync = require('./fileInfoAsync');
var _fileInfoAsync2 = _interopRequireDefault(_fileInfoAsync);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var regeneratorRuntime = require('regenerator-runtime');
function isImageType(type) {
  return type.match(/(jpeg|jpg|gif|png|bmp)$/) != null;
}
function getExtension(url) {
  return url
    .split('.')
    .pop()
    .split('?')[0]
    .split('#')[0]
    .toLowerCase();
}
function fromUriAsync(remoteUri, fileName) {
  var _ref, uri, name, hash, type, width, height, size;
  return regeneratorRuntime.async(
    function fromUriAsync$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _fileInfoAsync2.default)(remoteUri, fileName));
          case 2:
            _ref = _context.sent;
            uri = _ref.uri;
            name = _ref.name;
            hash = _ref.hash;
            if (!uri) {
              _context.next = 17;
              break;
            }
            type = getExtension(name);
            width = undefined;
            height = undefined;
            if (!isImageType(type)) {
              _context.next = 16;
              break;
            }
            _context.next = 13;
            return regeneratorRuntime.awrap((0, _ImageUtils.getSizeAsync)(uri));
          case 13:
            size = _context.sent;
            width = size.width;
            height = size.height;
          case 16:
            return _context.abrupt(
              'return',
              new _expoAsset.Asset({
                name: name,
                type: type,
                hash: hash,
                uri: uri,
                width: width,
                height: height,
              })
            );
          case 17:
          case 'end':
            return _context.stop();
        }
      }
    },
    null,
    this
  );
}
exports.default = fromUriAsync;
