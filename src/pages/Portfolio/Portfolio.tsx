import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData, portfolioTags } from '../../utils/allData';

const Portfolio = () => {
  /*                                 Creating State Hooks
  ==============================================================================================
   */

  const [filterValue, setfilterValue] = useState('All');
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  // ===========================================End!===============================================//

  /*                                  Function Start  
    // ==================================================================================//
      This function is use for Set the value inside filterValue and animationCard Stats so
      after that we pass the added values to access or search the selected values,
      This function I create for searching the works/projects which are displaying on 
      protfolio page.
    //==================================================================================//
*/
  const handleWorkFilter = (item) => {
    setfilterValue(item);
    setanimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setanimateCard({ y: 0, opacity: 1 });
    }, 500);
  };
  // ====================================Function End!====================================//

  return (
    <>
      <div className="app__work-container">
        {/*====================================== Portfolio Title section start======================================= */}

        <div className="app__work-title">
          My Creative <span>Portfolios</span>{' '}
        </div>
        <p className="p-text">
          These portfolios are examples of several projects I've made using
          various stacks and technologies. And I've included them here so that
          you can have a better feel of who I am and the stacks with which I can
          come up with original applications.
        </p>
        {/*====================================== Portfolio Title section END!======================================= */}

        {/* ========================Portfolio Filtering Section Start====================== */}
        <div className="app__work-filter app__flex">
          {portfolioTags.map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item.tagsName)}
              className={`app__work-filter-item ${
                filterValue === item.tagsName ? 'item-active' : ''
              }`}
            >
              {item.tagsName}
            </div>
          ))}
        </div>
        {/* ========================Portfolio Filtering Section END!====================== */}

        {/* ===============================Portfolio Project Data============================ */}

        <div className="app__work-portfolio">
          {portfolioData.map((work, index) => (
            // ==================================card started=================================//

            <>
              {filterValue === work.tags || filterValue === 'All' ? (
                <motion.div
                  animate={animateCard}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: 'tween' }}
                  className="app__work-item"
                  key={index}
                >
                  <div className="app__work-img">
                    <img src={work.imgURL} alt={work.name} />
                  </div>

                  <div className="app__work-content">
                    <p className="title-info">
                      <span className="title">{work.name}</span>
                      <span className="tag">{work.tags}</span>
                    </p>

                    <div className="tech-info">
                      <span className="title">technologies</span>
                      <p className="technologies">{work.technologies}</p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </>

            // ==================================card END!=================================//
          ))}
        </div>

        {/* =========================================END!==================================== */}
      </div>
    </>
  );
};

export default Portfolio;
