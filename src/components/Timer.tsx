import { useEffect, useState } from 'react';

type Props = { max?: number };

const MAX_COUNT = 60;

// This is a simple timer component that counts down from a max value
const Timer = ({ max = MAX_COUNT }: Props) => {
  const [count, setCount] = useState(max);
  // タイマーのカウントダウンを行う関数
  const tick = () => setCount(count - 1);
  // タイマーのリセットを行う関数
  const reset = () => setCount(max);

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

  // 残り時間の表示とリセットボタンを表示する
  return (
    <div>
      <p>残り時間: {count}秒</p>
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default Timer;
