import React from 'react';
import Set from './Set';

const Exercise = ({ currentExercise }) => {
  if (!currentExercise)
    return null;
  return (
    <div className="exercise">
      { currentExercise.name }
      { 
        currentExercise.sets.map(set =>
          <Set key={ set.set_id } currentSet={ set } />
        ) 
      }
    </div>
  );
};

export default Exercise;