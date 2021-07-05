import React from 'react';

const WeightSet = ({ set }) => {
  const { weight, reps } = set;
  return (
    <div>{ 
      `${weight.value}${weight.unit} x ${reps} reps`}
    </div>
  );
};

export default WeightSet;