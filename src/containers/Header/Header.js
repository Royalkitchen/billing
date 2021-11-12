import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
  let today = new Date();
  let time = today.toLocaleTimeString('en-US');
  let date = today.toLocaleDateString();
  let day = today.getDay();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [ctime, setCtime] = useState(time);
  const [cdate, setCdate] = useState(date);
  const [cday, setCday] = useState(day);
  const getTime = () => {
    let time = new Date().toLocaleTimeString('en-US');
    let date = new Date().toLocaleDateString();
    let day = today.getDay();
    setCtime(time);
    setCdate(date);
    setCday(day);
  };

  setInterval(getTime, 1000);
  return (
    <div className="navbar">
      <div className="logo">
        <img width="50px" height="50px" src={logo} alt="Royal Kitchen"></img>
      </div>
      <div className="heading">ROYAL KITCHEN</div>
      <div className="date-time">
        <div>
          {weekdays[cday]} {cdate}
        </div>
        <div>{ctime}</div>
      </div>
    </div>
  );
};

export default Header;
