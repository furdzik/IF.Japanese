import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { japaneseFormShape } from '@types/vocabularyDetailsShape';

import Tag from '@components/Tag';
import DetailsHeader from '@components/DetailsHeader';

import {
  DetailsWrapper,
  WordHeader,
  WordHeaderSeparator,
  JishoLink,
  Content,
  SectionWrapper,
  SectionInner,
  MainSection,
  NameWrapper,
  TagsWrapper,
  CharacterBlock,
  CharacterWrapper,
  OneCharacter
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
        {
          props.jishoLink ? (
            <JishoLink
              href={props.jishoLink}
              target="_blank"
              notKnow={!props.known && !props.inProgress && !props.nowLearning}
            >
              {intl.formatMessage(messages.jishoLinkText)}
            </JishoLink>
          ) : null
        }
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
        <DetailsHeader>{props.mainSectionHeader}</DetailsHeader>
        <SectionWrapper flex>
          <SectionInner>
            <NameWrapper>
              <CharacterBlock small={props.japaneseForm?.kanji.length > 5}>
                {
                  props.japaneseForm?.furigana ? (
                    <CharacterWrapper
                      furigana
                      small={props.japaneseForm?.kanji.length > 5}
                    >
                      {
                        props.japaneseForm?.furigana.map((el, index) => (
                          <OneCharacter key={index}>
                            {el}
                          </OneCharacter>
                        ))
                      }
                    </CharacterWrapper>
                  ) : null
                }
                {
                  props.japaneseForm?.kanji ? (
                    <CharacterWrapper
                      kanji
                      small={props.japaneseForm?.kanji.length > 5}
                    >
                      {
                        props.japaneseForm?.kanji.map((el, index) => (
                          <OneCharacter key={index}>
                            {el}
                          </OneCharacter>
                        ))
                      }
                    </CharacterWrapper>
                  ) : props.name
                }
              </CharacterBlock>
              {
                props.additionalBox ? (
                  props.additionalBox
                ) : null
              }
            </NameWrapper>
            {
              props.mainSection ? (
                <MainSection
                  wide={!props.secondarySection}
                >
                  {props.mainSection}
                </MainSection>
              ) : null
            }
          </SectionInner>
          {
            props.secondarySection ? props.secondarySection : null
          }
        </SectionWrapper>
        {
          props.sections ? props.sections.map((section, index) => (
            section?.section ? (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <DetailsHeader>{section.title}</DetailsHeader>
                <SectionWrapper>
                  {section?.section}
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
  mainSection: PropTypes.node.isRequired,
  mainSectionHeader: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  additionalBox: PropTypes.node,
  children: PropTypes.node,
  inProgress: PropTypes.bool,
  japaneseForm: japaneseFormShape,
  jishoLink: PropTypes.string,
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
  japaneseForm: null,
  jishoLink: null,
  known: null,
  meaning: null,
  nowLearning: null,
  secondarySection: null,
  sections: null,
  tags: null
};

export default Details;
