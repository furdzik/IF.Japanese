import PropTypes from 'prop-types';

import {
  tagsShape,
  statusShape,
  kanjiReadingShape,
  metadataShape
} from '@types/commonDetailsShape';

export const strokesShape = PropTypes.shape({
  count: PropTypes.number,
  graphs: PropTypes.arrayOf(PropTypes.string)
});

export const exampleShape = PropTypes.shape({
  japanese: PropTypes.string,
  meaning: PropTypes.string
});

export const examplesShape = PropTypes.arrayOf(exampleShape);

export const radicalShape = PropTypes.shape({
  character: PropTypes.string,
  meaning: PropTypes.string
});

export const radicalsShape = PropTypes.arrayOf(radicalShape);

export const kanjiDetailsShape = PropTypes.shape({
  kanji: PropTypes.string,
  meaning: PropTypes.string,
  reading: kanjiReadingShape,
  strokes: strokesShape,
  radicals: radicalsShape,
  status: statusShape,
  examples: examplesShape,
  metadata: metadataShape,
  tags: tagsShape
});
