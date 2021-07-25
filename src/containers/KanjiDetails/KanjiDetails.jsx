import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  kanjiReadingShape,
  statusShape,
  tagsShape,
  metadataShape
} from '@types/commonDetailsShape';
import { strokesShape, examplesShape } from '@types/kanjiDetailsShape';

import Loader from '@components/ui/Loader';

import KanjiDetailsComponent from '@components/KanjiDetails';

import selector from './KanjiDetails.selector';
import { getKanjiDetails } from './KanjiDetails.reducer';

const KanjiDetails = (props) => {
  useEffect(() => {
    props.getKanjiDetails(props.kanji);
  }, [props.kanji]);

  return !props.loading ? (
    <KanjiDetailsComponent
      kanji={props.kanji}
      examples={props.examples}
      meaning={props.meaning}
      metadata={props.metadata}
      radicals={props.radicals}
      reading={props.reading}
      status={props.status}
      strokes={props.strokes}
      tags={props.tags}
    />
  ) : <Loader covered />;
};

KanjiDetails.propTypes = {
  getKanjiDetails: PropTypes.func.isRequired,
  kanji: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  examples: examplesShape,
  meaning: PropTypes.string,
  metadata: metadataShape,
  radicals: PropTypes.arrayOf(PropTypes.string),
  reading: kanjiReadingShape,
  status: statusShape,
  strokes: strokesShape,
  tags: tagsShape
};

KanjiDetails.defaultProps = {
  examples: null,
  meaning: null,
  metadata: null,
  radicals: null,
  reading: null,
  status: null,
  strokes: null,
  tags: null
};

const mapDispatchToProps = {
  getKanjiDetails
};

export default connect(selector, mapDispatchToProps)(KanjiDetails);
