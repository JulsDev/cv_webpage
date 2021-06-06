import React from 'react';
import cn from 'classnames';

import AboutInfo from '../../components/About';
import SidebarInfo from '../../components/Sidebar';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <div className={cn(s.container, s.containerStruct)}>
        <SidebarInfo />
        <AboutInfo />
      </div>
    </div>
  );
};

export default HomePage;
