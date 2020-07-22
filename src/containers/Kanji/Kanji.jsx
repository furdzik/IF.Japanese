import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import selector from './Kanji.selector';

const Kanji = (props) => {
  // useEffect(() => {
  //   props.getVocabulary();
  // }, [props.selectedFilters]);

  return (
    <React.Fragment>
      Kanji
    </React.Fragment>
  );
};

Kanji.propTypes = {
};

Kanji.defaultProps = {
};

const mapDispatchToProps = {
};

export default connect(selector, mapDispatchToProps)(Kanji);
