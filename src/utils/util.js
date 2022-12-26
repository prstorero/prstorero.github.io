export function isUrl(value) {
  if (value == null || (typeof value !== 'string' || value instanceof String === true)) {
    return false;
  }
  return value.indexOf('http') !== -1;
}