import React, { useState } from 'react';

/* 
 * Builds a descending list of years from the supplied oldest year to present,
 * years can be clicked to show a descending list of months, months can be 
 * clicked to show all workouts from that month
 */
const WorkoutSelector = ({ oldestDate }) => {

  const today = new Date();
  const [currentYear, changeCurrentYear] = useState(today.getFullYear());
  // Set mostRecentRenderedMonth to the current month if we're currently on the
  // current year, else set it to December
  const mostRecentRenderedMonth = 
    currentYear === today.getFullYear() ? today.getMonth() : 11;
  const oldestYear = oldestDate.getFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dateList = [];

  // Method for generating the month list (for a given year)
  const renderMonths = (startMonth, year) => {
    let result = [];
    for (let month = startMonth ; month >= 0 ; month--) {
      result.push(<li key={`${year}${month}`}>{ months[month] }</li>);
    }
    return <ul key={ `${year}month-list` }>{ result }</ul>;
  };

  // Generate the year list, adding an event listener to change the current year
  for (let year = today.getFullYear() ; year >= oldestYear ; year--) {
    dateList.push(
      <li 
        key={ `${year}` } 
        onClick={ () => changeCurrentYear(year) }>
          { year }
        </li>
    );
    // When rendering the current year we need to render the month list for it
    if (year === currentYear) {
      dateList.push(renderMonths(mostRecentRenderedMonth, year));
    }
  }



  return <ul>{ dateList }</ul>;
};



export default WorkoutSelector;