// In a small town the population is "p0" at the beginning of a year.
// The population regularly increases by "percent" per year
// and moreover "aug" is new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater or equal to "p" inhabitants?

function nbYear(p0, percent, aug, p) {
  let population = p0;
  let result = 0;
  while (true) {
    population = population + (population * percent) / 100 + aug;
    result++;
    if (population >= p) break;
  }
  return result;
}
