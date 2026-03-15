import React, { useState } from 'react';
 Button from '../../components/ui/Button';

 Feature1: React.FC = () => {
  const [, setCount] = useState(0);

 const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2Feature 1</h2>
      <p>Count: {count}</p>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
};

export default Feature1;