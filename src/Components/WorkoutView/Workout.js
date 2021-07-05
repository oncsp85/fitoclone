import React from 'react';

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
  console.log(currentWorkout);
  return(
    <div className="workout">
      <h2 className="date">{ formatDate(currentWorkout.date.$date) }</h2>
    </div>
  );
};

export default Workout;