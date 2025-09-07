function checkSwitchCase(getVal) {
  val = getVal

  switch (val) {
    case 1:
      answer = 'One';
      break;
    case 2:
      answer = 'Two';
      break;
    case 3:
      answer = 'Three';
      break;
  }
  return answer;
}


console.log(checkSwitchCase(2));