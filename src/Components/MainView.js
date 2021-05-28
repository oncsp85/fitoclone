import React, { useState, useEffect } from 'react';
import WorkoutSelector from './WorkoutSelector';

const MainView = () => {

  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    setWorkouts(fetchWorkouts());
  }, []);

  const fetchWorkouts = () => {
    // This will eventually fetch the workout list from the API, for now I'm hard-coding
    return (
      [
        {
          "workout_id": 0,
          "date": { "$date": "2020-01-04T00:00:00Z" },
          "exercises":
            [
              {
                "exercise_id": 0,
                "name": "Barbell Bench Press",
                "sets":
                  [
                    { "weight": { "value": 15, "unit": "kg" }, "reps": 10, "set_id": 0 },
                    { "weight": { "value": 35, "unit": "kg" }, "reps": 5, "set_id": 1 },
                    { "weight": { "value": 45, "unit": "kg" }, "reps": 3, "set_id": 2 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 3 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 4 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 5 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 6 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 7 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 8 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 9 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 10 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 11 },
                    { "weight": { "value": 50, "unit": "kg" }, "reps": 5, "set_id": 12 }
                  ],
                "type": "weights"
              },
              {
                "exercise_id": 1,
                "name": "Front Barbell Squat",
                "sets":
                  [
                    { "weight": { "value": 15, "unit": "kg" }, "reps": 1, "set_id": 0 },
                    { "weight": { "value": 15, "unit": "kg" }, "reps": 1, "set_id": 1 },
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 7, "set_id": 2 },
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 7, "set_id": 3 },
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 7, "set_id": 4 },
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 7, "set_id": 5 },
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 7, "set_id": 6 }
                  ],
                "type": "weights"
              },
              {
                "exercise_id": 2,
                "name": "Push Press",
                "sets":
                  [
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 5, "set_id": 0 },
                    { "weight": { "value": 30, "unit": "kg" }, "reps": 7, "set_id": 1 },
                    { "weight": { "value": 30, "unit": "kg" }, "reps": 7, "set_id": 2 },
                    { "weight": { "value": 30, "unit": "kg" }, "reps": 7, "set_id": 3 },
                    { "weight": { "value": 30, "unit": "kg" }, "reps": 7, "set_id": 4 },
                    { "weight": { "value": 30, "unit": "kg" }, "reps": 7, "set_id": 5 }
                  ],
                "type": "weights"
              },
              {
                "exercise_id": 3,
                "name": "Bent Over Barbell Row",
                "sets":
                  [
                    { "weight": { "value": 15, "unit": "kg" }, "reps": 10, "set_id": 0 },
                    { "weight": { "value": 35, "unit": "kg" }, "reps": 5, "set_id": 1 },
                    { "weight": { "value": 40, "unit": "kg" }, "reps": 7, "set_id": 2 },
                    { "weight": { "value": 40, "unit": "kg" }, "reps": 7, "set_id": 3 },
                    { "weight": { "value": 40, "unit": "kg" }, "reps": 7, "set_id": 4 }
                  ],
                "type": "weights"
              },
              {
                "exercise_id": 4,
                "name": "Barbell Shrug",
                "sets":
                  [
                    { "weight": { "value": 40, "unit": "kg" }, "reps": 10, "set_id": 0 },
                    { "weight": { "value": 40, "unit": "kg" }, "reps": 10, "set_id": 1 },
                    { "weight": { "value": 40, "unit": "kg" }, "reps": 10, "set_id": 2 },
                    { "weight": { "value": 40, "unit": "kg" }, "reps": 10, "set_id": 3 }
                  ],
                "type": "weights"
              },
              {
                "exercise_id": 5,
                "name": "Barbell Curl",
                "sets":
                  [
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 10, "set_id": 0 },
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 10, "set_id": 1 },
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 10, "set_id": 2 },
                    { "weight": { "value": 20, "unit": "kg" }, "reps": 10, "set_id": 3 }
                  ],
                "type": "weights"
              }
            ]
        },
        {
          "workout_id": 0,
          "date":
            { "$date": "2020-01-06T00:00:00Z" },
          "exercises":
            [
              {
                "exercise_id": 0,
                "name": "Barbell Deadlift",
                "sets":
                  [
                    { "weight": { "value": 55, "unit": "kg" }, "reps": 5, "set_id": 0 },
                    { "weight": { "value": 85, "unit": "kg" }, "reps": 1, "set_id": 1 },
                    { "weight": { "value": 87.5, "unit": "kg" }, "reps": 5, "set_id": 2 },
                    { "weight": { "value": 87.5, "unit": "kg" }, "reps": 5, "set_id": 3 },
                    { "weight": { "value": 87.5, "unit": "kg" }, "reps": 5, "set_id": 4 },
                    { "weight": { "value": 87.5, "unit": "kg" }, "reps": 5, "set_id": 5 },
                    { "weight": { "value": 87.5, "unit": "kg" }, "reps": 5, "set_id": 6 },
                    { "weight": { "value": 87.5, "unit": "kg" }, "reps": 5, "set_id": 7 },
                    { "weight": { "value": 87.5, "unit": "kg" }, "reps": 5, "set_id": 8 }
                  ],
                "type": "weights"
              },
              {
                "exercise_id": 1,
                "name": "Standing Barbell Shoulder Press (OHP)",
                "sets":
                  [
                    { "weight": { "value": 15, "unit": "kg" }, "reps": 10, "set_id": 0 },
                    { "weight": { "value": 25, "unit": "kg" }, "reps": 3, "set_id": 1 },
                    { "weight": { "value": 30, "unit": "kg" }, "reps": 1, "set_id": 2 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 3 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 4 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 5 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 6 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 7 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 8 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 9 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 10 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 5, "set_id": 11 },
                    { "weight": { "value": 32.5, "unit": "kg" }, "reps": 8, "set_id": 12 }
                  ],
                "type": "weights"
              }
            ]
        },
        {
          "workout_id": 0,
          "date":
            { "$date": "2020-01-07T00:00:00Z" },
          "exercises":
            [
              {
                "exercise_id": 0,
                "name": "Paused Barbell Squat",
                "sets":
                  [
                    { "weight": { "value": 15, "unit": "kg" }, "reps": 10, "set_id": 0 },
                    { "weight": { "value": 35, "unit": "kg" }, "reps": 5, "set_id": 1 },
                    { "weight": { "value": 45, "unit": "kg" }, "reps": 7, "set_id": 2 },
                    { "weight": { "value": 45, "unit": "kg" }, "reps": 7, "set_id": 3 },
                    { "weight": { "value": 45, "unit": "kg" }, "reps": 7, "set_id": 4 },
                    { "weight": { "value": 45, "unit": "kg" }, "reps": 7, "set_id": 5 }
                  ],
                "type": "weights"
              },
              {
                "exercise_id": 1,
                "name": "Paused Bench Press",
                "sets":
                  [
                    { "weight": { "value": 15, "unit": "kg" }, "reps": 10, "set_id": 0 },
                    { "weight": { "value": 25, "unit": "kg" }, "reps": 5, "set_id": 1 },
                    { "weight": { "value": 35, "unit": "kg" }, "reps": 7, "set_id": 2 },
                    { "weight": { "value": 35, "unit": "kg" }, "reps": 7, "set_id": 3 },
                    { "weight": { "value": 35, "unit": "kg" }, "reps": 7, "set_id": 4 },
                    { "weight": { "value": 35, "unit": "kg" }, "reps": 7, "set_id": 5, "pr": true }
                  ],
                "type": "weights"
              },
              {
                "exercise_id": 2,
                "name": "Chin-Up",
                "sets":
                  [
                    { "reps": 7, "set_id": 0 },
                    { "reps": 7, "set_id": 1 },
                    { "reps": 7, "set_id": 2 },
                    { "reps": 7, "set_id": 3 }
                  ],
                "type": "bodyweight"
              },
              {
                "exercise_id": 3,
                "name": "Ab Wheel (kneeling)",
                "sets":
                  [
                    { "reps": 5, "set_id": 0 }
                  ],
                "type": "bodyweight"
              }
            ]
        }
      ]
    );
  };

  return (
    <div className="main-view">
      <WorkoutSelector oldestDate={ new Date(2012, 8, 4) } />
    </div>
  );
};

export default MainView;