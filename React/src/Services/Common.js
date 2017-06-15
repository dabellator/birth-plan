export function combineClasses () {

  return Array.prototype.reduce.call(arguments, (r, c) => {
    c = (typeof c === 'object' && c.length) ? combineClasses.apply(null, c) : c;
    return c !== undefined ? `${r} ${c}` : `${r}`;
  })
}
