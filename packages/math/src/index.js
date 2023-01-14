import { add } from 'add';

export function funMath(num1, num2, num3) {
  const added = add(num1, num2);
  return added * num3;
}

export function funMath2(num1, num2) {
  return num1 / num2;
}
