import { Btn } from '../../../../AbstractElements';
import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';

const SplitButtonDropdown = ({ item }) =>{
    return(
      <div className="btn-group">
        <Btn attrBtn={{ color:item.btncolor }} >{item.btnText}</Btn>
        <Dropdown className="separated-btn">
          <Btn attrBtn={{ color:item.btncolor }} ><i className="icofont icofont-arrow-down"></i></Btn>
          <DropdownMenu className="dropdown-content">
            {item.items.map((itm, i) =>
              <DropdownItem href="#" key={i}>{itm.item}</DropdownItem>
              )}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
};

export default SplitButtonDropdown;