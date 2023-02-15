import React, { Fragment, useEffect, useState } from 'react';
import { CardBody, Form, FormGroup } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';

const DefaultTypeahead = () => {
    const multiple = false;
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data));
    }, []);
    return (
      <Fragment>
        <CardBody>
          <div id="the-basics">
            <Form>
              <FormGroup>
                <Typeahead
                                id="basic-typeahead"
                                labelKey="name"
                                multiple={multiple}
                                options={options}
                                placeholder="Choose a state..."
                            />
              </FormGroup>
            </Form>
          </div>
        </CardBody>
      </Fragment>
    );
};
export default DefaultTypeahead;