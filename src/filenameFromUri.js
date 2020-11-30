Object.defineProperty(exports, '__esModule', { value: true });
function filenameFromUri(url) {
  return url
    .substring(url.lastIndexOf('/') + 1)
    .split('?')[0]
    .split('#')[0];
}
exports.default = filenameFromUri;
