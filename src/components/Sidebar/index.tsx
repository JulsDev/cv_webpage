import React from 'react';
import cn from 'classnames';

import ss from './Sidebar.module.scss';

import { socialList } from '../../utils/index';
import avatarImg from '../../assets/images/avatar.jpeg';
import phone from '../../assets/icons/phone.svg';
import envelop from '../../assets/icons/envelop.svg';

function SidebarInfo() {
  return (
    <div className={ss.wrapper}>
      <div className={ss.avatarWrapper}>
        <div className={ss.imageWrapper}>
          <img src={avatarImg} alt="frontend developer avatar" className={ss.imageSrc} />
        </div>
        <div className={ss.userNameBlock}>
          <h2 className={ss.userName}>Julia Aseeva</h2>
          <h3 className={ss.userJob}>Frontend Engineer</h3>
        </div>
      </div>
      <div className={ss.detailsWrapper}>
        <h3 className={ss.detailsTitle}>Details</h3>
        <div>San Francisco Bay Area</div>
      </div>
      <div className={ss.contacts}>
        <h3 className={ss.contactsTitle}>Contacts</h3>
        <div>
          <div className={ss.contactsItem}>
            <img src={phone} className={cn(ss.contactsLinkSvg, ss['contactsLinkSvg--phone'])} />
            <p>+ 1 925 430 96 14</p>
          </div>
          <div className={ss.contactsItem}>
            <img src={envelop} className={cn(ss.contactsLinkSvg, ss['contactsLinkSvg--phone'])} />
            <p>aseeva.ays@gmail.com</p>
          </div>
          <div className={ss.socialAccs}>
            {socialList.map((item) => {
              return (
                <div className={ss.contactsItem} key={item.id}>
                  <a href={item.link} target="_blank" rel="noreferrer" className={ss.contactsLink}>
                    <img src={item.image} className={ss.contactsLinkSvg} alt={item.link} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarInfo;
