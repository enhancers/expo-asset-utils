Object.defineProperty(exports, '__esModule', { value: true });
exports.default = cacheAssetsAsync;
var _expoAsset = require('expo-asset');
var _expoFont = require('expo-font');
var _ImageUtils = require('./ImageUtils');
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
function cacheAssetsAsync(_ref) {
  var _ref$images = _ref.images,
    images = _ref$images === undefined ? [] : _ref$images,
    _ref$files = _ref.files,
    files = _ref$files === undefined ? [] : _ref$files,
    _ref$fonts = _ref.fonts,
    fonts = _ref$fonts === undefined ? [] : _ref$fonts;
  return Promise.all(
    [].concat(
      _toConsumableArray(cacheImages(images)),
      _toConsumableArray(raw(files)),
      _toConsumableArray(cacheFonts(fonts))
    )
  );
}
function raw(files) {
  return files.map(function(file) {
    return _expoAsset.Asset.fromModule(file).downloadAsync();
  });
}
function cacheImages(images) {
  return images.map(function(image) {
    if (typeof image === 'string') {
      return (0, _ImageUtils.prefetch)(image);
    } else {
      return _expoAsset.Asset.fromModule(image).downloadAsync();
    }
  });
}
function cacheFonts(fonts) {
  return fonts.map(function(font) {
    return (0, _expoFont.loadAsync)(font);
  });
}
