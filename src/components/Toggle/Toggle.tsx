/* Importing the useContext hook from react and the icons from material ui. */
import React, { useContext } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { themeContext } from '../../Context';

interface toggleProps {}
const Toggle: React.FC<toggleProps> = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // ===================Toggle state chaning even Start=======================//
  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });

    // ===========================Dark Mode Variable Values Start==================//

    // =============================Light to Dark Mode Start======================//

    darkMode
      ? document.documentElement.style.setProperty('--primary', '#5933EB')
      : document.documentElement.style.setProperty('--primary', '#15C957');

    darkMode
      ? document.documentElement.style.setProperty('--bg-light', '#d3d5e4')
      : document.documentElement.style.setProperty('--bg-light', '#201A30');

    darkMode
      ? document.documentElement.style.setProperty('--white', '#ffffff')
      : document.documentElement.style.setProperty('--white', '#201A30');

    darkMode
      ? document.documentElement.style.setProperty(
          '--box-shadow',
          '0px 2px 92px 0px rgba(0, 0, 0, 0.13)'
        )
      : document.documentElement.style.setProperty(
          '--box-shadow',
          '0px 2px 92px 0px rgba(21, 201, 87, 0.13)'
        );

    darkMode
      ? document.documentElement.style.setProperty('--black', '#1b1b1b')
      : document.documentElement.style.setProperty('--black', '#FFFFFF');

    darkMode
      ? document.documentElement.style.setProperty('--bg-footer', '#201a30')
      : document.documentElement.style.setProperty('--bg-footer', '#5933EB');

    darkMode
      ? document.documentElement.style.setProperty(
          '--footer-content-color',
          '#FFFFFF'
        )
      : document.documentElement.style.setProperty(
          '--footer-content-color',
          '#323151'
        );

    // =============================Light to Dark Mode End!======================//

    // ===========================Dark Mode Variable Values End!==================//
  };
  // ===================Toggle state chaning even End=======================//
  return (
    <>
      <div className="app__toggle-container" onClick={handleClick}>
        <DarkModeOutlinedIcon />
        <WbSunnyOutlinedIcon />

        <div
          className="app__toggle-button"
          style={darkMode ? { left: '-2.1rem' } : { right: '1rem' }}
        ></div>
      </div>
    </>
  );
};

export default Toggle;
