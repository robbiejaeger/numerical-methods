// Solver Section

function secantMethod(problemToSolve, currentGuess, perturbation, errorTolerancePercent) {
  let previousGuess;
  let error = 100;
  let iteration = 0;

  while (error > errorTolerancePercent && iteration < 10) {
    previousGuess = currentGuess;
    currentGuess = calculateSecant(problemToSolve, currentGuess, perturbation);
    error = estimateError(previousGuess, currentGuess);
    iteration++;

    console.log('Iteration: ', iteration);
    console.log('Guess: ', currentGuess);
    console.log('Error: ', error);
  }
}

function calculateSecant(problemToSolve, currentGuess, perturbation) {
  let numerator = perturbation * currentGuess * problemToSolve(currentGuess);
  let denominator = problemToSolve(currentGuess + (perturbation * currentGuess)) - problemToSolve(currentGuess);
  return currentGuess - (numerator/denominator);
}

function estimateError(previous, current) {
  return Math.abs((current - previous)/current) * 100;
}


// Testing Section

function findX1(x) {
  return Math.exp(-x) - x;
}

function findX2(x) {
  return x*x - 4;
}

secantMethod(findX1, 1, 0.01, 1);