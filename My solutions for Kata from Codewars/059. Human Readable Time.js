// Write a function, which takes a non-negative integer (seconds) as input
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  let hh = ~~(seconds / 3600);
  let mm = ~~((seconds / 60) % 60);
  let ss = seconds % 60;
  return `${fixZero(hh)}:${fixZero(mm)}:${fixZero(ss)}`;
}

function fixZero(x) {
  return (x + '').length < 2 ? '0' + x : x;
}
