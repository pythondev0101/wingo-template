import React, { Fragment } from 'react';
import SidebarType from './SidebarType';
import LayoutType from './LayoutType';
import AnimationFade from './AnimationFade';
import SideBarStyle from './SidebarStyle';

const SidebarCusmizer = () => {

    return (
        <Fragment>
            <LayoutType />
            <SidebarType />
            <AnimationFade />
            <SideBarStyle />
        </Fragment>
    );
};

export default SidebarCusmizer;