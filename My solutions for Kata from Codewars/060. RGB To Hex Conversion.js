// The rgb function is incomplete.
// Complete it so that passing in RGB decimal values will result
// in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:
// rgb(255, 255, 255) --> FFFFFF
// rgb(255, 255, 300) --> FFFFFF
// rgb(0,0,0) --> 000000
// rgb(148, 0, 211) --> 9400D3

function rgb(r, g, b) {
  return convert(r) + convert(g) + convert(b);
}

function convert(x) {
  x = check(x).toString(16).toUpperCase();
  return x.length < 2 ? 0 + x : x;
}

function check(x) {
  if (x > 255) return 255;
  if (x < 0) return 0;
  return x;
}
