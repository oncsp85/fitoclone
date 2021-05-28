import React from 'react';

const WorkoutSelector = ({ oldestDate }) => {

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const oldestYear = oldestDate.getFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dateList = [];

  const renderMonths = (startMonth, year) => {
    let result = [];
    for (let month = startMonth ; month >= 0 ; month--) {
      result.push(<li key={`${year}${month}`}>{ months[month] }</li>);
    }
    return <ul key={ `${year}month-list` }>{ result }</ul>;
  };

  for (let year = currentYear ; year >= oldestYear ; year--) {
    dateList.push(<li key={ `${year}` }>{ year }</li>);
    if (year === currentYear) {
      dateList.push(renderMonths(currentMonth, year));
    }
  }
  console.log(dateList);
  return <ul>{ dateList }</ul>;
};

export default WorkoutSelector;