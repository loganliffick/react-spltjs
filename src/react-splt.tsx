import React from 'react';

interface SpltProps {
  text: string;
  array?: string[][];
  className?: string;
  start?: number;
  increment?: number;
  ease?: string;
}

const Splt: React.FC<SpltProps> = ({
  text,
  array = [],
  className = '',
  start = 0,
  increment = 0.05,
  ease = 'ease',
}) => {
  const characters = text.split('');

  return (
    <>
      {characters.map((char, index) => {
        const classes = [
          ...(array[index] || []),
          char === ' ' ? '!inline' : '',
        ];

        return (
          <span
            key={index}
            className={classes.join(' ') + `${className}`}
            style={{
              animationDuration: `${(index + 1) * increment + start}s`,
              animationTimingFunction: ease,
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
};

export default Splt;
