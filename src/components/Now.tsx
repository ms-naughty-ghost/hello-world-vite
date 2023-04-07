import { useEffect, useState } from 'react';

// 現在時刻を表示するコンポーネント
const NowDate = () => {
  const [now, setNow] = useState(new Date());

  const tick = () => setNow(new Date());

  useEffect(() => {
    const timer = setTimeout(tick, 1000);

    return () => clearTimeout(timer);
  }, [now]);

  return (
    <div>
      <p>現在時刻: {now.toLocaleString()}</p>
    </div>
  );
};

export default NowDate;
