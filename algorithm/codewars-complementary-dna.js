// Deoxyribonucleic acid(DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".Your function receives one side of the DNA(string, except for Haskell); you need to return the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input-- > output)

// "ATTGC" -- > "TAACG"
// "GTAT" -- > "CATA"

function DNAStrand(dna) {
  let array = dna.split('');
  let secondArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i] === 'A'
      ? secondArray.push('T')
      : array[i] === 'T'
        ? secondArray.push('A')
        : array[i] === 'G'
          ? secondArray.push('C')
          : secondArray.push('G')
  }
  return secondArray.join('')
}

var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
  return dna.split('').map(function (v) { return pairs[v] }).join('');
}
