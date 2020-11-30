Object.defineProperty(exports, '__esModule', { value: true });
exports.default = function(object) {
  return (
    object !== null &&
    typeof object === 'object' &&
    object.uri !== null &&
    typeof object.uri === 'string'
  );
};
