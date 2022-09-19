/* It's importing the Material-UI components. */
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const CustomTimeline = ({ title, icon }) => {
  return (
    <Timeline className={'app_timeline-container'}>
      {/* header section */}
      <TimelineItem className={'app__timeline-header'}>
        <TimelineSeparator>
          <TimelineDot className="app__timeline-header-dot">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="app__timeline-header-title">{title}</div>
        </TimelineContent>
      </TimelineItem>

      {/* //================================================Note=================================//
      the below CustomTimeSeparator Component should Added after Timeline Header Component 
        then you should add the elements/Items component which is located on constants folder. 
         //==================================================End=================================/*/}
    </Timeline>
  );
};

/**
 * It's a function that returns a TimelineSeparator component with a TimelineDot and TimelineConnector
 * component as children.
 */
export const CustomTimelineSeparator = () => (
  <TimelineSeparator className="app__timeline-items-separator-padding">
    <TimelineDot variant={'outlined'} className="app__timeline-items-dot" />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
