import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  additionalExplanationShape,
  kanjiReadingShape,
  metadataShape,
  problemsShape,
  statusShape,
  tagsShape
} from '@types/commonDetails';
import { examplesShape, similarKanjiArrayShape, strokesShape } from '@types/kanjiDetails';

import KanjiDetailsComponent from '@components/KanjiDetails';
import Loader from '@components/Loader';

import { getKanjiDetails } from './KanjiDetails.reducer';
import selector from './KanjiDetails.selector';

const KanjiDetails = (props) => {
  const params = useParams();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    props.getKanjiDetails(params.kanji);
  }, [params.kanji]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  /* To prevent Example container to send previous data requests */
  if (!hasMounted) {
    return null;
  }

  return !props.loading ? (
    <KanjiDetailsComponent
      kanji={params.kanji}
      examples={props.examples}
      additionalExplanation={props.additionalExplanation}
      apiError={props.apiError}
      meaning={props.meaning}
      metadata={props.metadata}
      problems={props.problems}
      radicals={props.radicals}
      reading={props.reading}
      similarKanji={props.similarKanji}
      status={props.status}
      strokes={props.strokes}
      tags={props.tags}
    />
  ) : <Loader covered />;
};

KanjiDetails.propTypes = {
  getKanjiDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  additionalExplanation: additionalExplanationShape,
  apiError: PropTypes.bool,
  examples: examplesShape,
  meaning: PropTypes.string,
  metadata: metadataShape,
  problems: problemsShape,
  radicals: PropTypes.arrayOf(PropTypes.string),
  reading: kanjiReadingShape,
  similarKanji: similarKanjiArrayShape,
  status: statusShape,
  strokes: strokesShape,
  tags: tagsShape
};

KanjiDetails.defaultProps = {
  additionalExplanation: null,
  apiError: false,
  examples: null,
  meaning: null,
  metadata: null,
  problems: null,
  radicals: null,
  reading: null,
  similarKanji: null,
  status: null,
  strokes: null,
  tags: null
};

const mapDispatchToProps = {
  getKanjiDetails
};

export default connect(selector, mapDispatchToProps)(KanjiDetails);
