import { useState, useEffect } from 'react';
import styles from './index.module.scss';

interface IProps {
  time: number;
  onEnd: Function;
}

const CountDown = (props: IProps) => {
  const { time, onEnd } = props;
  // 初始值，如果不传值默认为60
  const [count, setCount] = useState(time || 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => {
        //count=0 倒计时结束了
        if (count === 0) {
          clearInterval(timer);
          onEnd && onEnd();
          return count;
        }
        return count - 1;
      });
    }, 1000);
    // 组件卸载时清理掉 timer。防止内存泄露
    return () => {
      clearInterval(timer);
    };
  }, [time, onEnd]);
  return <div className={styles.countDown}>{count}</div>;
};

export default CountDown;
