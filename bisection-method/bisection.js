function bisection(functionToSolve, lowCondition, highCondition, precision) {
  let iterationTotal = 0;
  let outcome = 1; // arbitrary initial outcome (as long as it's greater than the precision)
  let bisection

  while (Math.abs(outcome) > precision && iterationTotal < 1000) {
    bisection = (lowCondition + highCondition) / 2;

    outcome = functionToSolve(bisection);

    if (outcome > 0) {
      highCondition = bisection;
    } else {
      lowCondition = bisection;
    }

    iterationTotal++
    console.log('iteration: ', iterationTotal);
    console.log('bisection: ', bisection);
    console.log('outcome: ', outcome);
    console.log('');
  }

  return bisection;
}

function findX(x) {
  return x*x*x - 8;
}

bisection(findX, 0, 5, 0.001);