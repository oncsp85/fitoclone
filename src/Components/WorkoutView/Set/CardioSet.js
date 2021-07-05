import React from 'react';

// Helper function to convert time in seconds to "HH:MM:SS" format.
const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  time %= 3600;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    String(hours).padStart(2, "0") + ":" + 
    String(minutes).padStart(2, "0") + ":" + 
    String(seconds).padStart(2, "0")
  );
}

const CardioSet = ({ set }) => {
  const { time, distance, speed, avhr, weight, resistance, other } = set;
  // Initial property; cardio exercises always have a time.
  const properties = [
    <span key="time">
      { formatTime(Number(time)) }
    </span>
  ];
  // All of the following properties are optional
  if (distance)
    properties.push(
      <span key="distance">
        {" | "}
        {distance.value} {distance.unit}
      </span>
    );
    if (set.speed)
    properties.push(
      <span key="speed">
        {" | "}
        {speed.value} {speed.unit}
      </span>
    );
    if (avhr)
    properties.push(
      <span key="avhr">
        {" | "}
        {avhr} {"BPM"}
      </span>
    );
    if (weight)
    properties.push(
      <span key="weight">
        {" | "}
        {weight.value} {weight.unit}
      </span>
    );
    if (set.resistance)
    properties.push(
      <span key="resistance">
        {" | "}
        {resistance.value} {resistance.unit}
      </span>
    );
    if (other)
    properties.push(
      <span key="other">
        {" | "}
        {other}
      </span>
    );

  return (
    <li key={set.set_id}>
      {properties}
    </li>
  );
};

export default CardioSet;