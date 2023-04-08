/**
 * maxRange: numberまでの素数を求める
 * param: maxRange: number 素数を求める範囲
 * return: number[] 素数の配列
 */
export const getPrimeNumbers = (maxRange: number): number[] => {
  const primeNumbers: number[] = [];
  for (let i = 2; i <= maxRange; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
};

/**
 *
 * @param i
 * @returns
 */
function isPrime(i: number): boolean {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      return false;
    }
  }
  return true;
}
