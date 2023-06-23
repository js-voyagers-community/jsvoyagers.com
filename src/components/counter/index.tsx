import React, { FC, useEffect, useState } from 'react';

interface ICounter {
  text: string;
  count: number;
  time: number; // in millisecond
  sign?: string;
}

const Counter: FC<ICounter> = ({ text, count: c, sign = '', time }) => {
  // const [ count, setCount ] = useState(0);

  useEffect(
    () => {
      const counter = document.getElementById(`count_${text}`);
      const animate = (obj, initVal, lastVal, duration) => {
        let startTime = 0;
        const step = (currentTime) => {
          if (!startTime) {
            startTime = currentTime;
          }
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const count = Math.floor(progress * (lastVal - initVal) + initVal);
          obj.innerHTML = count < 10 ? `0${count}${sign}` : `${count}${sign}`;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
          else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
          }
        };
        window.requestAnimationFrame(step);
      }
      animate(counter, 0, c, time);
    },
  );

  return (
    <>
      <p id={`count_${text}`}>0</p>
      <p>{text}</p>
    </>
  );
};

export default Counter;
