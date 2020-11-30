Object.defineProperty(exports, '__esModule', { value: true });
var _expoFileSystem = require('expo-file-system');
var _ImageUtils = require('./ImageUtils');
var regeneratorRuntime = require('regenerator-runtime');
function base64forImageUriAsync(uri) {
  var size, data;
  return regeneratorRuntime.async(
    function base64forImageUriAsync$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _ImageUtils.getSizeAsync)(uri));
          case 2:
            size = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(
              (0, _expoFileSystem.readAsStringAsync)(uri, {
                encoding: _expoFileSystem.EncodingType.Base64,
              })
            );
          case 5:
            data = _context.sent;
            return _context.abrupt('return', { data: data, size: size });
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
exports.default = base64forImageUriAsync;
