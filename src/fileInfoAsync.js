Object.defineProperty(exports, '__esModule', { value: true });
var _expoFileSystem = require('expo-file-system');
var FileSystem = _interopRequireWildcard(_expoFileSystem);
var _core = require('@unimodules/core');
var _filenameFromUri = require('./filenameFromUri');
var _filenameFromUri2 = _interopRequireDefault(_filenameFromUri);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
var regeneratorRuntime = require('regenerator-runtime');
function isAssetLibraryUri(uri) {
  return ['assets-library://', 'asset:/', '/private/var/containers/bundle/application'].includes(
    uri.toLowerCase()
  );
}
function isRemoteUri(uri) {
  return /^https?:\/\//i.test(uri);
}
function getHashAsync(uri) {
  var _ref, md5;
  return regeneratorRuntime.async(
    function getHashAsync$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(FileSystem.getInfoAsync(uri, { md5: true }));
          case 2:
            _ref = _context.sent;
            md5 = _ref.md5;
            return _context.abrupt('return', md5);
          case 5:
          case 'end':
            return _context.stop();
        }
      }
    },
    null,
    this
  );
}
function resolveLocalFileAsync(_ref2) {
  var uri = _ref2.uri,
    name = _ref2.name;
  var hash;
  return regeneratorRuntime.async(
    function resolveLocalFileAsync$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            if (!(_core.Platform.OS === 'web')) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt('return', { uri: uri, name: name, hash: null });
          case 2:
            _context2.next = 4;
            return regeneratorRuntime.awrap(getHashAsync(uri));
          case 4:
            hash = _context2.sent;
            if (hash) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt('return', null);
          case 7:
            return _context2.abrupt('return', { uri: uri, name: name, hash: hash });
          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    },
    null,
    this
  );
}
function fileInfoAsync(url, name) {
  var localUri, _hash, _ref3, _uri, _hash2, file;
  return regeneratorRuntime.async(
    function fileInfoAsync$(_context3) {
      while (1) {
        switch ((_context3.prev = _context3.next)) {
          case 0:
            if (url) {
              _context3.next = 3;
              break;
            }
            throw new Error('expo-asset-utils: fileInfoAsync(): cannot load from empty url!');
          case 3:
            name = name || (0, _filenameFromUri2.default)(url);
            if (!(_core.Platform.OS === 'web')) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt('return', { uri: url, name: name, hash: null });
          case 6:
            localUri = FileSystem.cacheDirectory + name;
            if (!isAssetLibraryUri(url)) {
              _context3.next = 16;
              break;
            }
            _context3.next = 10;
            return regeneratorRuntime.awrap(FileSystem.copyAsync({ from: url, to: localUri }));
          case 10:
            _context3.next = 12;
            return regeneratorRuntime.awrap(getHashAsync(localUri));
          case 12:
            _hash = _context3.sent;
            return _context3.abrupt('return', { uri: localUri, name: name, hash: _hash });
          case 16:
            if (!isRemoteUri(url)) {
              _context3.next = 25;
              break;
            }
            _context3.next = 19;
            return regeneratorRuntime.awrap(FileSystem.downloadAsync(url, localUri, { md5: true }));
          case 19:
            _ref3 = _context3.sent;
            _uri = _ref3.uri;
            _hash2 = _ref3.md5;
            return _context3.abrupt('return', { uri: _uri, name: name, hash: _hash2 });
          case 25:
            _context3.next = 27;
            return regeneratorRuntime.awrap(resolveLocalFileAsync({ uri: url, name: name }));
          case 27:
            file = _context3.sent;
            if (file) {
              _context3.next = 34;
              break;
            }
            _context3.next = 31;
            return regeneratorRuntime.awrap(resolveLocalFileAsync({ uri: localUri, name: name }));
          case 31:
            file = _context3.sent;
            if (file) {
              _context3.next = 34;
              break;
            }
            throw new Error(
              "expo-asset-utils: fileInfoAsync(): couldn't resolve md5 hash for local uri: " +
                url +
                ' or alternate: ' +
                localUri
            );
          case 34:
            return _context3.abrupt('return', file);
          case 35:
          case 'end':
            return _context3.stop();
        }
      }
    },
    null,
    this
  );
}
exports.default = fileInfoAsync;
