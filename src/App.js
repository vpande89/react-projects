import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Vidhi",
  lastName: "Pandey"
};

function getGreeting(user) {
  if (user) {
    return <h1> hello, {formatName(user)}! </h1>;
  } else {
    return <h1> hello, stranger!</h1>;
  }
}

const element = (
  <div>
    {getGreeting(user)}
  </div>
);

ReactDOM.render(element, document.getElementById('root'));






import React, { useState, useEffect } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    if (remove) {
      console.log('Component unmounted');
    }
  }, [remove]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const handleDecrement= () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleRemove = () => {
    setRemove(true);
  };

  return (
    <div>
      {!remove && (
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <p>Count: {count}</p>
        </div>
      )}
      {!remove && (
        <button onClick={handleRemove}>Unmount</button>
      )}
    </div>
  );
};

export default CounterButton;