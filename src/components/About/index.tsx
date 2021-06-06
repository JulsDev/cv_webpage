import React from 'react';

import as from './About.module.scss';

function AboutInfo() {
  return (
    <div className={as.wrapper}>
      <div className={as.blockInfo}>
        <h2>Profile</h2>
        <p>
          Front-end engineer with 2 years of web development experience in a diverse team (and 6 years of experience as
          an engineer in the past). In last company I set up the frontend development process within the department,
          participated in the full development cycle of new functionality, integrated the service into a mobile
          application. Work hand-in-hand with designers, web-core team, backend developers and marketing team. I am
          looking for a company where I can realize my passion for user interface development, grow as an engineer and
          bring maximum benefit to buisness and users.
        </p>
      </div>
    </div>
  );
}

export default AboutInfo;
