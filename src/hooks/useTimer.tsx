// タイマーフック
import {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  SyntheticEvent,
} from 'react';
import { getPrimeNumbers } from '../utils/prime';

export const useTimer = (maxCount: number): [number, boolean, () => void] => {
  const [count, setCount] = useState(maxCount);
  const primes = useMemo(() => getPrimeNumbers(maxCount), [maxCount]);
  // タイマーID
  const timerId = useRef<number>();

  // タイマーのカウントダウンを行う関数
  const tick = useCallback(() => setCount((t) => t - 1), []);
  // タイマーのリセットを行う関数
  const reset = useCallback(
    (event?: SyntheticEvent) => {
      event?.stopPropagation();
      if (timerId.current) clearTimeout(timerId.current);
      setCount(maxCount);
      timerId.current = setTimeout(tick, 1000);
    },
    [maxCount, tick]
  );

  // タイマーのカウントダウンを行う
  useEffect(() => {
    timerId.current = setTimeout(tick, 1000);

    return () => clearTimeout(timerId.current!);
  }, [count]);
  // countが0以下になったらリセットする
  useEffect(() => {
    if (count <= 0) {
      reset();
    }
  }, [count]);

  return [count, primes.includes(count), reset];
};
