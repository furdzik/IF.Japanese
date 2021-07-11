import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Tag from '@components/Tag';

import {
  DetailsWrapper,
  WordHeader,
  WordHeaderSeparator,
  JishoLink,
  Content,
  Header,
  SectionWrapper,
  NameWrapper,
  TagsWrapper,
  CharacterWrapper
} from './Details.styles.js';
import messages from './Details.messages';

const Details = (props) => {
  const intl = useIntl();

  return (
    <DetailsWrapper>
      <WordHeader
        known={props.known}
        inProgress={props.inProgress}
        nowLearning={props.nowLearning}
      >
        <span>
          {props.name}
          {
            props.meaning && props.name !== props.meaning ? (
              <React.Fragment>
                <WordHeaderSeparator>/</WordHeaderSeparator>
                {props.meaning}
              </React.Fragment>
            ) : null
          }
        </span>
        <JishoLink
          href={props.jishoLink}
          target="_blank"
          notKnow={!props.known && !props.inProgress && !props.nowLearning}
        >
          {intl.formatMessage(messages.jishoLinkText)}
        </JishoLink>
      </WordHeader>
      <Content>
        <TagsWrapper>
          {
            props.tags ? props.tags.map((el, index) => (
              React.createElement(Tag, {
                // eslint-disable-next-line react/no-array-index-key
                key: index,
                ...el.props
              })
            )) : null
          }
        </TagsWrapper>
        <Header>{props.mainSectionHeader}</Header>
        <SectionWrapper flex>
          <NameWrapper>
            <CharacterWrapper>{props.name}</CharacterWrapper>
            {
              props.additionalBox ? (
                props.additionalBox
              ) : null
            }
          </NameWrapper>
          {
            props.mainSection ? (
              <div>{props.mainSection}</div>
            ) : null
          }
          {
            props.secondarySection ? props.secondarySection : null
          }
        </SectionWrapper>
        {
          props.sections ? props.sections.map((section, index) => (
            section.section ? (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <Header>{section.title}</Header>
                <SectionWrapper>
                  {section.section}
                </SectionWrapper>
              </React.Fragment>
            ) : null
          )) : null
        }
        {props.children}
      </Content>
    </DetailsWrapper>
  );
};

Details.propTypes = {
  jishoLink: PropTypes.string.isRequired,
  mainSection: PropTypes.node.isRequired,
  mainSectionHeader: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  additionalBox: PropTypes.node,
  children: PropTypes.node,
  inProgress: PropTypes.bool,
  known: PropTypes.bool,
  meaning: PropTypes.string,
  nowLearning: PropTypes.bool,
  secondarySection: PropTypes.node,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    section: PropTypes.node
  })),
  tags: PropTypes.arrayOf(PropTypes.node)
};

Details.defaultProps = {
  additionalBox: null,
  children: null,
  inProgress: null,
  known: null,
  meaning: null,
  nowLearning: null,
  secondarySection: null,
  sections: null,
  tags: null
};

export default Details;
