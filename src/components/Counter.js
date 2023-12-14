import React, { useEffect, useState } from 'react';

const Counter = () => {
  let [count, setCount] = useState(1);
  const [threshold, setThreshold] = useState(true);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count<=0 && threshold === true) {
      alert('Threshold is active. Click on Bypass to deactivate.');
    } else {
      setCount(count - 1);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      handleIncrease();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      handleDecrease();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [count]);

  const handleReset = () => {
    setCount(0);
  };

  const handleBypass = () => {
    setThreshold(!threshold)
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={handleDecrease}
        >
          -
        </button>
        <p style={{ margin: '3vw', fontSize: '40px' }}>{count}</p>
        <button
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10
        }}
      >
        <button onClick={handleReset}>RESET</button>
        <button
          onClick={handleBypass}
          style={{
            color: threshold ? 'orangered' : 'orange',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          BYPASS
          <span style={{ fontSize: '8px' }}>
            {threshold ? 'deactivated' : 'activated'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
