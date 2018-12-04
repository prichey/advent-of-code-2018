const fs = require('fs-extra');
const argv = require('yargs')
  .usage('Usage: $0 -d [num] -p [num]')
  .alias('d', 'day')
  .describe('d', 'Day # to run')
  .alias('p', 'part')
  .default('p', 1)
  .describe('p', 'Part # to run')
  .demandOption(['d']).argv;

async function run() {
  const { day, part } = argv;
  const solution = await runDay(day, part);

  console.log(`The result for Day ${day}, Part ${part} is: ${solution}`);
  return solution;
}

async function runDay(dayNum, partNum) {
  try {
    const basePath = `./solutions/d${dayNum}`;
    const solutionPath = `${basePath}/p${partNum}`;

    // make sure day exists
    if (!fs.existsSync(`${basePath}`)) {
      throw new Error(`No solutions found for ${dayNum}`);
    }

    // make sure solution exists
    if (!fs.existsSync(`${solutionPath}.js`)) {
      throw new Error(`No solutions found for Day ${dayNum}, Part ${partNum}`);
    }

    const solution = require(solutionPath);
    const inputPath = `${basePath}/input.txt`;

    if (fs.existsSync(inputPath)) {
      const inputStr = await fs
        .readFile(inputPath)
        .then(data => data.toString());

      return solution(inputStr);
    } else {
      // no input file, try running the solution without input
      return solution();
    }
  } catch (err) {
    console.error(err);
  }
}

run();
