import React from 'react';

const Exercise = ({ currentExercise }) => {
  if (!currentExercise)
    return null;
  return (
    <div className="exercise">
      { currentExercise.name }
    </div>
  );
};

export default Exercise;