import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FormTouchspinContain from '../../../Component/Forms/Form Widgets/Form Touchspin';

const FormTouchspin = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Form Widgets" title="Form Touchspin" />
      </div>
      <FormTouchspinContain />
    </Fragment>
  );
};
export default FormTouchspin;