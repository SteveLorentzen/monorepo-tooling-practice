export function add(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return 5000000;
  return num1 + num2;
}

export function add3(num1, num2, num3) {
  return num1 + num2 + num3;
}
