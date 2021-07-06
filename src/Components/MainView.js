import React, { useState, useEffect } from 'react';
import Workout from './WorkoutView/Workout';
import WorkoutSelector from './WorkoutSelector';

const MainView = () => {

  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetchWorkouts().then(workouts => setWorkouts(workouts));
  }, []);

  const fetchWorkouts = async () => {
    const response = await fetch(`http://localhost:3001/workouts`);
    const workoutList = await response.json();
    return (workoutList);
  };

  return (
    <div className="main-view">
      {
        workouts.map(workout => {
          console.log(workout);
          return (
            <Workout 
              key={ `${workout.date}_${workout.workout_id}` } 
              currentWorkout={ workout }
            />);
        })
      }
      {/* <WorkoutSelector oldestDate={ new Date(2012, 8, 4) } /> */}
    </div>
  );
};

export default MainView;