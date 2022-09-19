/* Importing all the necessary components from the libraries. */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Toggle from '../Toggle/Toggle';
/**
 * It's a React functional component that returns a Navbar component from the React-Bootstrap library.
 * and also with component I added #TOGGLE component with can change the Dark Mode and Light Mode
 * and #TOGGLE component is located on Toggle Folder.
 */

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const [isActive, setisActive] = useState('');
  return (
    <Navbar className="app__header-container" sticky="top" expand="lg">
      <Container>
        {/* ===================================Navigation Buttons Start=============================== */}
        {/* Nav brand */}
        <div className="app__header-brand">
          <Link to={'/'} onClick={() => setisActive('')}>
            <Navbar.Brand>
              <HomeIcon />
            </Navbar.Brand>
          </Link>
        </div>
        {/* Nav Toggle */}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="app__header-navbar">
            <Nav>
              {/* Resume */}
              <Link
                to="/"
                onClick={() => setisActive('resume')}
                className={
                  isActive === 'resume' ? 'app__header-navbar-active' : ''
                }
              >
                Resume
              </Link>

              {/* Portfolio */}
              <Link
                to="/portfolio"
                onClick={() => setisActive('portfolio')}
                className={
                  isActive === 'portfolio' ? 'app__header-navbar-active' : ''
                }
              >
                Portfolio
              </Link>
            </Nav>
          </div>

          {/* ===================================Navigation Buttons End!=============================== */}

          {/* ===================================Navbar Right Side Start=============================== */}
          <div className="app__header-rightside-constainer">
            {/* =============================Social Media Icons Start======================= */}
            <div className="app__header-rightside-socialIcons">
              <a href="https://www.facebook.com/sardarzaidev/" target="_blank">
                <FacebookOutlinedIcon />
              </a>
              <a href="https://www.github.com/" target="_blank">
                <GitHubIcon />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <YouTubeIcon />
              </a>
            </div>
            {/* =============================Social Media Icons END!======================= */}

            <div className="app__header-toggle">
              <Toggle />
            </div>
          </div>
          {/* ===================================Navbar Right Side End!=============================== */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
