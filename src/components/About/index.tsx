import React from 'react';

import as from './About.module.scss';
import { langList, techList, toolsList } from '../../utils/index';

function AboutInfo() {
  return (
    <div className={as.wrapper}>
      <div className={as.profile}>
        <div className={as.about}>
          <h3 className={as.subTitle}>Profile</h3>
          <p>
            Front-end engineer with two years of web development experience and seven years of prior experience as a
            research software engineer.
          </p>
        </div>
        <div className={as.about}>
          <h3 className={as.subTitle}>Technologies and Languages</h3>
          <div className={as.tagList}>
            {langList.map((item) => {
              return (
                <span className={as.tagStyle} key={item}>
                  {item}
                </span>
              );
            })}
          </div>
          <div className={as.tagList}>
            {techList.map((item) => {
              return (
                <span className={as.tagStyle} key={item}>
                  {item}
                </span>
              );
            })}
          </div>
          <div className={as.tagList}>
            {toolsList.map((item) => {
              return (
                <span className={as.tagStyle} key={item}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
