// Child.js
import React from 'react';

const Child = React.memo(({ buttonName, handleIncrement }) => {
  console.log('🔁 Child re-rendered');
  return (
    <div>
      <button onClick={handleIncrement}>{buttonName}</button>
    </div>
  );
});

export default Child;
