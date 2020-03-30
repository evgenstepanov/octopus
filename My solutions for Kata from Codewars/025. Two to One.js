// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters,

// Each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join('');
}
