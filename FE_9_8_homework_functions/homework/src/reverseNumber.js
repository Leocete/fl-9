function reverseNumber(num) {
  sign = num < 0 ? '-' : '';
  num = Math.abs(num) + '';
  return Number(sign + num.split('').reverse().join(''));
}
