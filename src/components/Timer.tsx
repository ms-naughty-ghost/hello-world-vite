import { useTimer } from '../hooks/useTimer';

type Props = { max?: number };

const MAX_COUNT = 60;

// This is a simple timer component that counts down from a max value
const Timer = ({ max = MAX_COUNT }: Props) => {
  const [count, isPrime, reset] = useTimer(max);

  // 残り時間の表示とリセットボタンを表示する
  return (
    <div>
      <p>
        残り時間: {count}秒 {isPrime && '素数です'}
      </p>
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default Timer;
