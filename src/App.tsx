/* Importing the necessary components and modules for the app. */
import { Container, Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header, Profile } from './components';
import { Portfolio, Resume } from './pages';

/* Importing the CSS file that contains the styles for the app. */
import './theme/style.css';

const App = () => {
  return (
    <Container>
      <Grid container spacing={1}>
        {/* ===========================Portfolio Section Component Start=========================== */}
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        {/* ===========================Portfolio Section Component End=========================== */}

        {/* ============Header,Resume,Footer and Portfolio Sections Start================== */}
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Header />
          <div className="app__pages-container">
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
          <Footer />
        </Grid>
        {/* ============Header,Resume,Footer and Portfolio Sections End================== */}
      </Grid>
    </Container>
  );
};

export default App;
