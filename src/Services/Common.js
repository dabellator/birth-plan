export function combineClasses () {
  return Array.prototype.reduce.call(arguments, (r, c) => {
    c = (c && typeof c === 'object' && c.length) ? combineClasses.apply(null, c) : c;
    return c ? `${r} ${c}` : `${r}`;
  })
}

export function createRandom () {
  var letters = 'abcdefghijklmnopqrstuvxyz';
  var numbers = '1234567890';
  var sets = [letters, numbers];
  var id = '';

  for (let i=0;i<12;i++) {
    var set = sets[Math.floor(Math.random() * sets.length)];
    var character = set[Math.floor(Math.random() * set.length)];
    if (set.length === letters.length && Math.round(Math.random())) character = character.toUpperCase();
    id = id.concat(character);
  }
  return id;
}
