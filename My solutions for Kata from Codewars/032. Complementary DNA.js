// In Deoxyribonucleic acid (DNA) strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// You have function with one side of the DNA (string, except for Haskell);
// you need to get the other complementary side.
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA"

function DNAStrand(dna) {
  return dna
    .split('')
    .map(i => {
      if (i === 'A') return 'T';
      if (i === 'T') return 'A';
      if (i === 'C') return 'G';
      if (i === 'G') return 'C';
    })
    .join();
}
