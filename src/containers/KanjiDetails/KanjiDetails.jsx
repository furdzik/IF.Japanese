import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { objectShape } from '@utils/types/objectShape';

import KanjiDetailsComponent from '@components/KanjiDetails';
import Loader from '@components/ui/Loader';

import { getKanjiDetails } from './KanjiDetails.reducer';
import selector from './KanjiDetails.selector';

const KanjiDetails = (props) => {
  useEffect(() => {
    props.getKanjiDetails(props.kanji);
  }, [props.kanji]);

  return !props.loading ? (
    <KanjiDetailsComponent
      kanji={props.kanji}
      level={props.level}
      known={props.known}
      nowLearning={props.nowLearning}
      inProgress={props.inProgress}
      grade={props.grade}
      kunyomi={props.kunyomi}
      onyomi={props.onyomi}
      meaning={props.meaning}
      numberOfStrokes={props.numberOfStrokes}
      strokes={props.strokes}
      radical={props.radical}
      examples={props.examples}
      isJoyo={props.isJoyo}
    />
  ) : <Loader covered />;
};

KanjiDetails.propTypes = {
  getKanjiDetails: PropTypes.func.isRequired,
  kanji: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  examples: PropTypes.arrayOf(objectShape),
  grade: PropTypes.number,
  inProgress: PropTypes.bool,
  isJoyo: PropTypes.bool,
  known: PropTypes.bool,
  kunyomi: PropTypes.string,
  level: PropTypes.number,
  meaning: objectShape,
  nowLearning: PropTypes.bool,
  numberOfStrokes: PropTypes.number,
  onyomi: PropTypes.string,
  radical: objectShape,
  strokes: objectShape
};

KanjiDetails.defaultProps = {
  examples: [],
  grade: null,
  inProgress: null,
  isJoyo: null,
  known: null,
  kunyomi: null,
  level: null,
  nowLearning: null,
  meaning: null,
  numberOfStrokes: null,
  onyomi: null,
  radical: null,
  strokes: null
};

const mapDispatchToProps = {
  getKanjiDetails
};

export default connect(selector, mapDispatchToProps)(KanjiDetails);
