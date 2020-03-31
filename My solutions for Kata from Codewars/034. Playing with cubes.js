function Cube(n) {
  var side = n === undefined ? 0 : n;

  this.getSide = function() {
    return side;
  };
  this.setSide = function(n) {
    if (isNaN(n) === true) {
      return;
    }
    side = Math.abs(n);
  };
}
