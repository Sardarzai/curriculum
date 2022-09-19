/* Importing the React library and the moment library. */
import React, { useEffect, useState } from 'react';
import moment from 'moment';

/* Defining the props that the component will receive. */
interface CountTimeProps {
  startDate: string;
  endDate: string;
}
const CountTime: React.FC<CountTimeProps> = ({ startDate, endDate }) => {
  /* Declare Variable and State Hook for Storing Start Date and End Date */
  const targetStartDate = moment(startDate);
  const [targetEndDate, settargetEndDate] = useState(moment(endDate));

  /*          Find out Duraction Between Start Date and End Date (Years,Hours and Minutes)
//   ============================================================================================== //
*/
  const totalDurationBetweenDates = moment.duration(
    targetEndDate.diff(targetStartDate)
  );
  useEffect(() => {
    const interval = setInterval(() => {
      settargetEndDate(moment(endDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  //   =====================================Function End============================================= //
  return (
    <>
      {/* //================================Printing Data Section Start============================// */}
      <div className="app__countTime-container">
        <span className="app__countTime-title">Experience:</span>
        <span className="app__countTime-counted-Date-Container">
          <span>
            {totalDurationBetweenDates.years()}{' '}
            <span className="lable">Years</span>{' '}
          </span>
          <span>
            {totalDurationBetweenDates.hours()}{' '}
            <span className="lable">Hours</span>{' '}
          </span>
          <span>
            {totalDurationBetweenDates.minutes()}{' '}
            <span className="lable">Minutes</span>{' '}
          </span>
        </span>
      </div>
      {/* //================================Printing Data Section Start============================// */}
    </>
  );
};

export default CountTime;

/* 
//=========================================Note=========================================// 
    in genelar this component is designed for counting the time between those dates which 
    we pass to props of this component and this component is completelly dynamically means
    every where you want you can used that.
    But I'm going to use now with Timeline component on Educatoin and Work Experiences sections 
    because in assignment file mentioned that should count the dates that's how long ago it started.
    
*/
