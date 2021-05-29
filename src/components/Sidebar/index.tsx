import React from 'react';

import ss from './Sidebar.module.scss';

function SidebarInfo() {
  return (
    <div className={ss.wrapper}>
      <div>
        <div>Avatar</div>
        <p>***</p>
        <div>Iuliia Aseeva</div>
      </div>
      <div>
        <h2>Details</h2>
        <div>Adress</div>
      </div>
      <div>
        <h2>Contacts</h2>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
}

export default SidebarInfo;
