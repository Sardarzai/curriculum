/* Importing the icons from the material-ui library. */
import React from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

// ======================Import the custom desinged #COMPONENTS Start=======================//
import AppButtons from '../Button/AppButtons';
import CustomTimeline from '../Timeline/CustomTimeline';
import TimelineItems from '../../constants/TimelineItems';
// ======================Import the custom desinged #COMPONENTS End!=======================//

/* // ========================================================================================
Import the Data and images from All Data constants folder (images) Start
===============================================================================================// */
import { profileData, contactData } from '../../utils/allData';
import { images } from '../../constants';
// ======================End!=======================//

const Profile = () => {
  return (
    // ======================Profile main Containter Start=======================//
    <div className="app__profiles-container">
      {/* // ======================Profile Title Section Start====================== */}
      <div className="app__profile-title">
        <h1 className="app__title">{profileData.name}</h1>
        <p className="app__text">{profileData.position}</p>
      </div>
      {/* // ======================Profile Title section End====================== */}

      {/* // ======================Profile Image Section Start====================== */}
      <figure className="app__profile-img">
        <img src={images.profileImg} alt="my-image" />
      </figure>
      {/* // ======================Profile Image Section End!====================== */}

      {/* // ======================Profile Information & Button Section Start====================== */}

      <div className="app__profile-info">
        <CustomTimeline title="" icon={<PersonOutlineOutlinedIcon />} />
        <TimelineItems
          title="Address:"
          subTile={contactData.address}
          startDate=""
          endDate=""
          info=""
        />
        <TimelineItems
          title="Contact Info: "
          subTile={contactData.email}
          startDate={contactData.web}
          info={contactData.mobile}
          endDate=""
        />
        {/* // ======================Profile Button Section Start====================== */}
        <span className="app__profile-button">
          <AppButtons
            title={'Download CV'}
            icon={<CloudDownloadOutlinedIcon />}
          />
        </span>
        {/* // ======================Profile Button Section End====================== */}
      </div>
      {/* // ======================Profile Information Section End!====================== */}
    </div>
    // ======================Profile main Containter End!=======================//
  );
};

export default Profile;
