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

export const similarKanjiShape = PropTypes.shape({
  kanji: PropTypes.string,
  meaning: PropTypes.string,
  reading: kanjiReadingShape,
  status: statusShape,
  tags: tagsShape
});

export const similarKanjiArrayShape = PropTypes.arrayOf(similarKanjiShape);

export const exampleShape = PropTypes.shape({
  vocab: PropTypes.string,
  reading: PropTypes.string,
  meaning: PropTypes.string,
  status: statusShape,
  tags: tagsShape
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
  similarKanji: similarKanjiArrayShape,
  examples: examplesShape,
  metadata: metadataShape,
  tags: tagsShape
});
