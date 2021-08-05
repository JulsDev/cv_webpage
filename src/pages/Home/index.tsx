import React from 'react';

import AboutInfo from '../../components/About';
import SidebarInfo from '../../components/Sidebar';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.containerStruct}>
          <SidebarInfo />
          <AboutInfo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
