import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import {
  DetailsWrapper,
  WordHeader,
  WordHeaderSeparator,
  JishoLink,
  Content,
  Header,
  SectionWrapper,
  NameWrapper,
  Tag,
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
      >
        <span>{props.name}</span>
        {
          props.reading && props.name !== props.reading ? (
            <React.Fragment>
              <WordHeaderSeparator>/</WordHeaderSeparator>
              {props.reading}
            </React.Fragment>
          ) : null
        }
        <JishoLink
          href={props.jishoLink}
          target="_blank"
          notKnow={!props.known && !props.inProgress}
        >
          {intl.formatMessage(messages.jishoLinkText)}
        </JishoLink>
      </WordHeader>
      <Content>
        <TagsWrapper>
          {
            props.tags ? props.tags.map((el, index) => (
              React.createElement(Tag, {
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
        </SectionWrapper>
        {
          props.sections ? props.sections.map((section, index) => (
            section.section ? (
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
  name: PropTypes.string.isRequired,
  jishoLink: PropTypes.string.isRequired,
  mainSection: PropTypes.node.isRequired,
  mainSectionHeader: PropTypes.string.isRequired,
  additionalBox: PropTypes.node,
  children: PropTypes.node,
  inProgress: PropTypes.bool,
  reading: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    section: PropTypes.node
  })),
  known: PropTypes.bool,

};

Details.defaultProps = {
  additionalBox: null,
  children: null,
  inProgress: null,
  known: null,
  sections: null,
  reading: null
};

export default Details;
