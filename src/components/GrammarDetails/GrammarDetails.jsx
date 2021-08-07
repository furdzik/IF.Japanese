import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

// import { Link } from 'react-router-dom';

// import { grammarTypes, tagTypes } from '@config/constants';

import { statusShape, tagsShape } from '@types/commonDetailsShape';
import { examplesShape, similarGrammarShape } from '@types/grammarShape';

// import {
//   japaneseFormShape,
//   translationsShape,
//   kanjiPartsShape,
//   otherFormsShape
// } from '@types/vocabularyDetailsShape';

import Details from '@components/Details';
import DetailsSecondarySection from '@components/DetailsSecondarySection';
// import DetailsSubHeader from '@components/DetailsSubHeader';
import Tag from '@components/Tag';

import {
  ExamplesWrapper
} from './GrammarDetails.styles.js';
import messages from './GrammarDetails.messages';
import DetailsSubHeader from '../DetailsSubHeader';

const GrammarDetails = (props) => {
  const intl = useIntl();

  const getTags = () => {
    const tags = [];

    if (props.tags) {
      props.tags.forEach((el, index) => {
        // eslint-disable-next-line react/no-array-index-key
        tags.push(<Tag tagType={el.tagType} key={index}>{el.label}</Tag>);
      });
    }

    return tags;
  };

  return (
    <Details
      grammarId={props.grammarId}
      name={props.grammarName}
      known={props.status?.known}
      inProgress={props.status?.inProgress}
      nowLearning={props.status?.nowLearning}
      toRepeat={props.status?.nowLearning}
      tags={getTags()}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
        <div>Tu będzie komponent z gramatyką - explanation i komponent</div>
      )}
      secondarySection={props.similarGrammar ? (
        <DetailsSecondarySection>
          <DetailsSubHeader>{intl.formatMessage(messages.similarGrammarHeader)}</DetailsSubHeader>
          Tu będą podobne gramatyki
        </DetailsSecondarySection>
      ) : null}
      sections={[
        {
          title: intl.formatMessage(messages.examplesHeader),
          section: props.examples ? (
            <ExamplesWrapper>
              {
                props.examples.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>{el}</div>
                ))
              }
            </ExamplesWrapper>
          ) : null
        }
      ]}
    />
  );
};

GrammarDetails.propTypes = {
  grammarId: PropTypes.string.isRequired,
  grammarName: PropTypes.string.isRequired,
  status: statusShape.isRequired,
  examples: examplesShape,
  similarGrammar: similarGrammarShape,
  tags: tagsShape
};

GrammarDetails.defaultProps = {
  examples: [],
  similarGrammar: [],
  tags: []
};

export default GrammarDetails;
