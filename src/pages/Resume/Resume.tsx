/* Importing the necessary modules for the component. */
import React from 'react';
import { motion } from 'framer-motion';
import { Grid, TextField } from '@mui/material';

/* Importing the components and constants from the other files. */
import CustomTimeline from '../../components/Timeline/CustomTimeline';
import TimelineItems from '../../constants/TimelineItems';
import { AppButtons } from '../../components';
import { CountTime } from '../../components';

/* Importing the icons from the material ui icons. */
import WorkIcon from '@mui/icons-material/Work';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

/* Importing the data from the allData.js file. */
import {
  educationData,
  expereinceData,
  servicesData,
  brandsData,
  aboutData,
  contactData,
} from '../../utils/allData';

const Resume = () => {
  return (
    <>
      {/* =========================About section started=========================== */}
      <Grid container className="app__about-container">
        <Grid item className="app__about-title">
          About <span>Me</span>
        </Grid>
        <Grid item className="app__about-info">
          {aboutData.info}
        </Grid>
        <Grid item className="app__about-info">
          {aboutData.info}
        </Grid>
      </Grid>
      {/* //===================================END========================================// */}

      {/* =========================Services section started=========================== */}

      <Grid container className="app__services-container">
        <Grid item lg={12} className="app__services-title">
          <span>Services</span> Background
          <span className="app__services-title-info">
            I'm A Full-Stack Developer With More Than 5 Years Of Experience That
            Is Capable Of Creating Both Client-Side And Server-Side Software.
          </span>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="space-around"
            className="app__services-items-container"
          >
            {/* //======Fitching data to list from all Data with map======// */}

            {servicesData.map((serData) => (
              <Grid item xs={12} sm={6} md={3} key={serData.title}>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: 'tween' }}
                >
                  <div className="app__services-items-card-container">
                    <img src={serData.imgURL} alt={serData.title} />
                    <span>{serData.title}</span>
                    <p>{serData.info}</p>
                  </div>
                </motion.div>
              </Grid>
            ))}
            {/* //======================END============================== */}
          </Grid>
        </Grid>
      </Grid>
      {/* //===================================END========================================// */}

      {/* =================Education and Experience section started=================== */}
      <Grid container className="app__experience-container">
        <Grid item lg={12} className="app__experience-title">
          Education & <span>Experience</span> Background
        </Grid>

        <Grid item sm={12} className="app__experience-items-container">
          <Grid container>
            {/* //================Education Section Start=================== */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<AutoStoriesIcon />} />

              {/* //======Fitching data to list from all Data with map======// */}
              {educationData.map((edudata) => (
                <>
                  <TimelineItems
                    key={edudata.title}
                    title={edudata.title}
                    subTile={edudata.subtitle}
                    startDate={edudata.startDate}
                    info={edudata.info}
                    endDate={edudata.endDate}
                  />
                  <CountTime
                    startDate={edudata.startDate}
                    endDate={edudata.endDate}
                  />
                </>
              ))}
              {/* //======================END============================== */}
            </Grid>
            {/* //================Education Section END==================== */}

            {/* //================Experience Section Start=================== */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Experiences" icon={<WorkIcon />} />

              {/* //======Fitching data to list from all Data with map======// */}
              {expereinceData.map((expData) => (
                <>
                  <TimelineItems
                    key={expData.title}
                    title={expData.title}
                    subTile={expData.subtitle}
                    startDate={expData.startDate}
                    info={expData.info}
                    endDate={expData.endDate}
                  />
                  <CountTime
                    startDate={expData.startDate}
                    endDate={expData.endDate}
                  />
                </>
              ))}
              {/* //======================END============================== */}
            </Grid>
            {/* //================Experience Section END==================== */}
          </Grid>
        </Grid>
      </Grid>
      {/* //===================================END========================================// */}

      {/* =================Brands section started=================== */}

      <div className="app__brands-container">
        {brandsData.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ scale: 1.1 }}
            key={brand.id}
          >
            {/* //======Fitching data to list from all Data with map======// */}
            <div className="app__brands-item">
              <img src={brand.imgURL} alt={brand.id} />
            </div>
            {/* //======================END============================== */}
          </motion.div>
        ))}
      </div>
      {/* //===================================END========================================// */}

      {/* =================Contact section started=================== */}
      <Grid container className="app__contact-container">
        <Grid item lg={12} className="app__contact-title">
          Take A <span>Coffe</span> And <span>Chat</span> With Me.
        </Grid>

        <Grid item sm={12} className="app__contact-form-container">
          <Grid container>
            {/* //================Contact Form Section Start=================== */}

            <Grid item sm={12} md={6}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Name" variant="standard" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Emali" variant="standard" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      fullWidth
                      multiline
                      rows={3}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <AppButtons
                      title={'Send Message'}
                      icon={<TelegramIcon />}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* //================Education Section END==================== */}

            {/* //================Contact Information Section Start=================== */}
            <Grid item sm={12} md={6}>
              <div className="app__contact-form-info-container">
                <span className="title-span">Adress</span>
                <span className="info-span">{contactData.address}</span>

                <span className="title-span">Email</span>
                <span className="info-span">{contactData.email}</span>

                <span className="title-span">Mobile</span>
                <span className="info-span">{contactData.mobile}</span>

                <span className="title-span">Website</span>
                <span className="info-span">{contactData.web}</span>
                {/* ===========================Social Media Icons============================ */}

                <div className="app__contact-form-socialMediaIcons">
                  <a
                    href="https://www.facebook.com/sardarzaidev/"
                    target="_blank"
                  >
                    <FacebookOutlinedIcon />
                  </a>
                  <a href="https://www.github.com/" target="_blank">
                    <GitHubIcon />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank">
                    <YouTubeIcon />
                  </a>
                </div>
              </div>
            </Grid>
            {/* //================Contact Info Section END==================== */}
          </Grid>
        </Grid>
      </Grid>
      {/* //===================================END========================================// */}
    </>
  );
};

export default Resume;
