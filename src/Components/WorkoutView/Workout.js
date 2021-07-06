import React from 'react';
import Exercise from './Exercise';

// Helper function to format dates, e.g. "2020-02-01" -> "Saturday, 1 Feb 2020"
const formatDate = dateString => {
  return new Date(dateString).toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "short", year:"numeric"
  });
}

const Workout = ({ currentWorkout }) => {
  if (!currentWorkout) {
    return null;
  }
  return(
    <div className="workout">
      <h2 className="date">{ formatDate(currentWorkout.date) }</h2>
      { 
        currentWorkout.exercises.map(exercise => 
          <Exercise key={ exercise.exercise_id } currentExercise={ exercise } />) 
      }
    </div>
  );
};

export default Workout;