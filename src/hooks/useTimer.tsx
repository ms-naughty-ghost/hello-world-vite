// タイマーフック
import { useState, useEffect, useMemo } from 'react';
import { getPrimeNumbers } from '../utils/prime';

export const useTimer = (maxCount: number): [number, boolean, () => void] => {
  const [count, setCount] = useState(maxCount);
  const primes = useMemo(() => getPrimeNumbers(maxCount), [maxCount]);
  // タイマーのカウントダウンを行う関数
  const tick = () => setCount(count - 1);
  // タイマーのリセットを行う関数
  const reset = () => setCount(maxCount);

  // タイマーのカウントダウンを行う
  useEffect(() => {
    const timer = setTimeout(tick, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  // countが0以下になったらリセットする
  useEffect(() => {
    if (count <= 0) {
      reset();
    }
  }, [count]);

  return [count, primes.includes(count), reset];
};
