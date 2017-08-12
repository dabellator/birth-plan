function makeRandom() {
  return Math.round(Math.random() * 255);
}

function pad(num) {
  var s = "0" + num;
  return s.substr(s.length-2);
}

module.exports = function() {
  var i = 0;
  var digits = [];
  for (i; i<19; i++) {
    i === 4 || i === 7 || i === 10 ?
      digits.push('-') :
      digits.push(pad(makeRandom().toString(16)));
  }
  return digits.join('');
}
