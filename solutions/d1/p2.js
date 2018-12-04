const processFrequencyChanges = input => {
  const frequencies = input
    .trim()
    .split(/[\n,]+/)
    .map(str => parseInt(str));

  let iteration = 0;
  let currentFrequency = 0;
  const positions = new Set([currentFrequency]);

  while (true) {
    const nextFrequency = currentFrequency + frequencies[iteration];

    if (positions.has(nextFrequency)) return nextFrequency;
    positions.add(nextFrequency);
    currentFrequency = nextFrequency;

    // add 1 if we aren't done iterating over list, or reset to 0
    iteration = iteration < frequencies.length - 1 ? iteration + 1 : 0;
  }

  return null;
};

module.exports = processFrequencyChanges;
