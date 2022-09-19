/* Importing the components that will be used in the component. */
import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import { CustomTimelineSeparator } from '../components/Timeline/CustomTimeline';

// /*================= Defining the interface/props that the component will receive. ==============*/
interface Props {
  title: string;
  subTile: string;
  startDate: string;
  endDate: string;
  info: string;
}
// ==============================================END=============================================//

const TimelineItems = ({ title, subTile, startDate, endDate, info }: Props) => {
  return (
    <TimelineItem className="app__timeline-items">
      <CustomTimelineSeparator />
      <TimelineContent className="app__timeline-items-content">
        <span className="app__timeline-items-title">{title}</span>

        <span className="app__timeline-items-subtitle">{subTile}</span>
        <span className="app__timeline-items-year">
          {startDate + ' - ' + endDate}
        </span>
        <span className="app__timeline-items-info">{info}</span>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineItems;
/**
 *
 * ==============================================================================================
 *  This function that takes in a title, subtitle, year, and info. And returns a timeline item with the
 * title, subtitle, year, and info.
 * and we can use this component to add dynamically Timline Items whit different types of Data.
 * Just import component and add the data Like:
 *
 *  <TimelineItems title='abc',suttitle='xyz',year='2022',info='discription' />
 *
 * ================================================================================================
 *
 *
 */
