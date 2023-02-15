import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import SamplePageContain from '../../Component/Sample Page';

const SamplePage = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Pages" title="Sample Page" />
      </div>
      <SamplePageContain />
    </Fragment>
  );
};
export default SamplePage;