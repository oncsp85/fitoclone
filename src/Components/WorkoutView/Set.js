import React from 'react';

const Set = ({ currentSet }) => {
  if (!currentSet)
    return null;
  const weight = currentSet.weight;
  return (
    <div className="set">
      { 
        weight ? 
          `${weight.value}${weight.unit} x ${currentSet.reps}` : null
      }
    </div>
  );
};

export default Set;