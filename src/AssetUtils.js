Object.defineProperty(exports, '__esModule', { value: true });
exports.ImageUtils = exports.cacheAssetsAsync = exports.arrayFromObject = exports.base64forImageUriAsync = exports.isReactImageFormat = exports.fileInfoAsync = exports.fromUriAsync = exports.resolveAsync = exports.copyAssetToSameDirectoryWithNewNameAsync = exports.uriAsync = undefined;
var _uriAsync = require('./uriAsync');
Object.defineProperty(exports, 'uriAsync', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_uriAsync).default;
  },
});
var _copyAssetToSameDirectoryWithNewNameAsync = require('./copyAssetToSameDirectoryWithNewNameAsync');
Object.defineProperty(exports, 'copyAssetToSameDirectoryWithNewNameAsync', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_copyAssetToSameDirectoryWithNewNameAsync).default;
  },
});
var _resolveAsync = require('./resolveAsync');
Object.defineProperty(exports, 'resolveAsync', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolveAsync).default;
  },
});
var _fromUriAsync = require('./fromUriAsync');
Object.defineProperty(exports, 'fromUriAsync', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fromUriAsync).default;
  },
});
var _fileInfoAsync = require('./fileInfoAsync');
Object.defineProperty(exports, 'fileInfoAsync', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fileInfoAsync).default;
  },
});
var _isReactImageFormat = require('./isReactImageFormat');
Object.defineProperty(exports, 'isReactImageFormat', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isReactImageFormat).default;
  },
});
var _base64forImageUriAsync = require('./base64forImageUriAsync');
Object.defineProperty(exports, 'base64forImageUriAsync', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_base64forImageUriAsync).default;
  },
});
var _arrayFromObject = require('./arrayFromObject');
Object.defineProperty(exports, 'arrayFromObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrayFromObject).default;
  },
});
var _cacheAssetsAsync = require('./cacheAssetsAsync');
Object.defineProperty(exports, 'cacheAssetsAsync', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cacheAssetsAsync).default;
  },
});
exports.imageSizeAsync = imageSizeAsync;
var _ImageUtils = require('./ImageUtils');
var ImageUtils = _interopRequireWildcard(_ImageUtils);
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
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
exports.ImageUtils = ImageUtils;
function imageSizeAsync() {
  console.warn('expo-asset-utils: imageSizeAsync() is deprecated. Use ImageUtils.getSizeAsync()');
  return ImageUtils.getSizeAsync.apply(ImageUtils, arguments);
}
