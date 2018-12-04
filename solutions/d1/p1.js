const processFrequencyChanges = input =>
  input
    .trim()
    .split(/[\n,]+/)
    .reduce((total, change) => total + parseInt(change), 0);

module.exports = processFrequencyChanges;
