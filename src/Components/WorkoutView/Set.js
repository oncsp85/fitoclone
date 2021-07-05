import React from 'react';
import WeightSet from './Set/WeightSet';
import CardioSet from './Set/CardioSet';
import BodyweightSet from './Set/BodyweightSet';

const Set = ({ type, currentSet }) => {
  if (!currentSet)
    return null;
  if (type === "weights")
    return <WeightSet set={ currentSet } />
  if (type === "cardio")
    return <CardioSet set={ currentSet } />
  if (type === "bodyweight")
    return <BodyweightSet set={ currentSet } />
};

export default Set;