import React from 'react';
import cn from 'classnames';

import ss from './Sidebar.module.scss';

import avatarImg from '../../assets/images/avatar.jpg';
import githubSvg from '../../assets/icons/github.svg';
import linkedIn from '../../assets/icons/linkedIn.svg';
import facebook from '../../assets/icons/facebook.svg';
import phone from '../../assets/icons/phone.svg';
import envelop from '../../assets/icons/envelop.svg';
import telegram from '../../assets/icons/telegram.svg';

function SidebarInfo() {
  return (
    <div className={ss.wrapper}>
      <div className={ss.avatarWrapper}>
        <div className={ss.imageWrapper}>
          <img src={avatarImg} alt="frontend developer avatar" className={ss.imageSrc} />
        </div>
        <h2 className={ss.userName}>Iuliia Aseeva</h2>
        <div className={ss.userJob}>Frontend Engeneer</div>
        {/* <p>***</p> */}
      </div>
      <div className={ss.detailsWrapper}>
        <h3>Details</h3>
        <div>Moscow</div>
      </div>
      <div className={ss.contacts}>
        <h3>Contacts</h3>
        <div>
          <div className={ss.contactsItem}>
            <img src={phone} className={cn(ss.contactsLinkSvg, ss['contactsLinkSvg--phone'])} />
            <p>+ 7 916 136 69 87</p>
          </div>
          <div className={ss.contactsItem}>
            <img src={envelop} className={cn(ss.contactsLinkSvg, ss['contactsLinkSvg--phone'])} />
            <p>aseeva.ays@gmail.com</p>
          </div>
          <div className={ss.socialAccs}>
            <div className={ss.contactsItem}>
              <a href="https://github.com/JulsDev" target="_blank" className={ss.contactsLink}>
                <img src={githubSvg} className={ss.contactsLinkSvg} />
              </a>
            </div>
            <div className={ss.contactsItem}>
              <a href="https://www.linkedin.com/in/julia-aseeva-8a1751171" target="_blank" className={ss.contactsLink}>
                <img src={linkedIn} className={ss.contactsLinkSvg} />
              </a>
            </div>
            <div className={ss.contactsItem}>
              <a
                href="https://www.facebook.com/profile.php?id=100013984274634"
                target="_blank"
                className={ss.contactsLink}>
                <img src={facebook} className={ss.contactsLinkSvg} />
              </a>
            </div>
            <div className={ss.contactsItem}>
              <a href="https://t.me/julsdev" target="_blank" className={ss.contactsLink}>
                <img src={telegram} className={ss.contactsLinkSvg} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarInfo;
