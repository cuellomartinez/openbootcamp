import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const StateComponent = ({ contact }) => {
    return (
          <div>
            <h2>
              Name: { contact.name }
            </h2>
            
            <h6>
              MSG: { contact.msg}
             </h6>
        </div>
    );
};
StateComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};

export default StateComponent;
