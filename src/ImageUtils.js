Object.defineProperty(exports, '__esModule', { value: true });
exports.prefetch = prefetch;
exports.getSizeAsync = getSizeAsync;
var _reactNative = require('react-native');
function prefetch(url) {
  if (!_reactNative.Image.prefetch)
    throw new Error('expo-asset-utils: Image.prefetch is not supported.');
  return _reactNative.Image.prefetch(url);
}
function getSizeAsync(uri) {
  if (!_reactNative.Image.getSize)
    throw new Error('expo-asset-utils: Image.getSize is not supported.');
  return new Promise(function(resolve, reject) {
    return _reactNative.Image.getSize(
      uri,
      function(width, height) {
        return resolve({ width: width, height: height });
      },
      reject
    );
  });
}
