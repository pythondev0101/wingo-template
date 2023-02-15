import React, { Fragment, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/index';
import TapTop from './TapTop/index';
import Header from './Header';
import SideBarLayout from './SideBar-Layout';
import Themecustomizer from './ThemeCustomizer';
import CheckContext from '../_helper/customizer';
import AnimationThemeContext from '../_helper/AnimationTheme';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ConfigDB from '../Config/Theme-Config';
import Loader from './Loader';

const Layout = ({ children, classNames, ...rest }) => {
  const { sidebar_types, settings, setIconShow, toggleIcon, setToggleIcon } = useContext(CheckContext);
  const settings1 = localStorage.getItem('sidebar_Settings') || settings;
  const sidebar_types1 = localStorage.getItem('sidebar_types') || sidebar_types;
  const location = useLocation();
  const { animation } = useContext(AnimationThemeContext);
  const animationTheme =
    localStorage.getItem('animation') ||
    animation || ConfigDB.data.router_animation;
  window.addEventListener('resize', () => {
    if ((window.innerWidth - 500) <= 575) {
      setToggleIcon(true);
    } else {
      setToggleIcon(false);
    }
    if (window.innerWidth <= 575) {
      setIconShow(true);
    } else {
      setIconShow(false);
    }
  });

  return (
    <Fragment>
      <Loader />
      <TapTop />
      <div className={`page-wrapper ${sidebar_types1} ${settings1}`} id="pageWrapper">
        <div className={`page-main-header ${toggleIcon ? 'close_icon' : ''}`}>
          <Header />
        </div>
        <div className="page-body-wrapper horizontal-menu">
          <header className={`main-nav ${toggleIcon ? 'close_icon' : ''}`}>
            <SideBarLayout />
          </header>
          <TransitionGroup {...rest}>
            <CSSTransition
              key={location.key}
              timeout={100}
              classNames={animationTheme}
              unmountOnExit
            >
              <div className="page-body">
                <Outlet />
              </div>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
      </div>
      <Themecustomizer />
      <ToastContainer />
    </Fragment>
  );
};
export default Layout;