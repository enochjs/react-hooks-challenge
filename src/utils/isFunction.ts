function isFunction(fn: any) {
  return toString.call(fn) === '[object Function]'
}
export default isFunction