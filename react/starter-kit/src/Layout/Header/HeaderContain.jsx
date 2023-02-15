import React, { Fragment, useEffect, useState } from 'react';
import { FileText, LogIn, Mail, MoreHorizontal, Settings, User } from 'react-feather';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { H6, Image, LI, UL } from '../../AbstractElements';
import UserImg from '../../assets/images/avtar/emoji/9.png';
import ItemCart from './ItemCart';
import MaxMiniSize from './MaxMiniSize';
import Message from './Message';
import MoonLight from './MoonLight';
import Notification from './Notification';
import Language from './Langauge';
import Bookmark from './Bookmark/index';

const HeaderContain = () => {
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    setProfile(localStorage.getItem('profileURL') || UserImg);
    setName(localStorage.getItem('Name'));

  }, []);
  const [open, setOpen] = useState(false);
  const onAdd = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <div className="nav-right col pull-right right-menu">
        <UL attrUL={{ className: `simple-list d-flex flex-row nav-menus ${open ? 'open' : ''}` }}>
          <LI attrLI={{ className: 'onhover-dropdown' }}>
            <a className="txt-dark" href="#javascript">
              <H6 className='rounded-circle'>EN</H6> </a>
            <Language />
          </LI>
          <ItemCart />
          <Bookmark />
          <Notification />
          <Message />
          <MoonLight />
          <MaxMiniSize />
          <LI attrLI={{ className: 'onhover-dropdown' }} >
            <Media className="profile-media align-items-center">
              <Image attrImage={{
                className: 'rounded-circle', src: `${profile}`, alt: '',
              }}
              />
            </Media>
            <Media body>
              <span>{name}</span>
            </Media>
            <UL
              attrUL={{
                className: 'simple-list profile-dropdown onhover-show-div',
              }}
            >
              <LI>
                <User />
                <Link to={`#`}><span>Account </span></Link>
              </LI>
              <LI>
                <Mail />
                <Link to={`#`}><span>Inbox</span></Link>
              </LI>
              <LI>
                <FileText />
                <Link to={`#`}><span>Taskboard</span></Link>
              </LI>
              <LI>
                <Settings />
                <Link to={`#`}><span>Settings</span></Link>
              </LI>
              <LI>
                <Link to={`#`} className="btn btn-light w-100">
                  <LogIn /> Logout
                </Link>
              </LI>
            </UL>
          </LI>
        </UL>
      </div >
      <div className="d-lg-none col mobile-toggle pull-right" onClick={() => onAdd()}>
        <i> <MoreHorizontal /></i>
      </div>
    </Fragment >
  );
};
export default HeaderContain;