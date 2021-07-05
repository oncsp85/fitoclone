import React from 'react';

const WeightSet = ({ set }) => {
  return (
    <div>{ 
      `${set.weight.value}${set.weight.unit}x${set.reps}`}
    </div>
  );
};

export default WeightSet;