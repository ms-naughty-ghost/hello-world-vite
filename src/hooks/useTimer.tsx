// タイマーフック
import { useState, useEffect } from 'react';

export const useTimer = (maxCount: number): [number, () => void] => {
  const [count, setCount] = useState(maxCount);
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

  return [count, reset];
};
