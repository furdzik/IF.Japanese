import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getKanji } from './Kanji.reducer';
import selector from './Kanji.selector';

const Kanji = (props) => {
  useEffect(() => {
    props.getKanji();
  }, [props.selectedFilters]);

  return (
    <React.Fragment>
      Kanji
    </React.Fragment>
  );
};

Kanji.propTypes = {
  getKanji: PropTypes.func.isRequired
};

Kanji.defaultProps = {
};

const mapDispatchToProps = {
  getKanji
};

export default connect(selector, mapDispatchToProps)(Kanji);
