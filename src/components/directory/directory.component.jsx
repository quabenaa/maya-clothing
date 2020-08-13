import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.components';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

import './directory.style.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProp = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProp)(Directory);
