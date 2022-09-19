/* Importing the Button component from the material-ui library. */
import React from 'react';
import { Button } from '@mui/material';

/**
 * This function takes in a title and an icon and returns a button with the title and icon inside of
 * it. And it's a dynammic button component that you can used any every whit different Icons and Titles.
 */
const AppButtons = ({ title, icon }) => {
  return (
    <button className="app__buttons">
      <span className="app__buttons-title">{title}</span>
      <span className="app__buttons-icon-container">{icon ? icon : null}</span>
    </button>
  );
};

export default AppButtons;
