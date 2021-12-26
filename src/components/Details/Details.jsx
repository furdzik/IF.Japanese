import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { v4 as uuidv4 } from 'uuid';

import { SECTION_TYPES } from '@constants';

import { japaneseFormShape } from '@types/vocabularyDetails';

import ErrorMessageBox from '@components/ErrorMessageBox';
import Heading from '@components/Heading';
import KanjiWithFurigana from '@components/KanjiWithFurigana';
import Tag from '@components/Tag';

import Section from './Section';

import {
  DetailsWrapper,
  WordHeader,
  WordHeaderSeparator,
  JishoLink,
  Content,
  SectionsWrapper,
  MainSection,
  NameWrapper,
  TagsWrapper,
  CharacterBlock
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
        toRepeat={props.toRepeat}
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
      {
        props.apiError ? (
          <ErrorMessageBox />
        ) : null
      }
      <Content>
        <TagsWrapper>
          {
            props.tags ? props.tags.map((el) => (
              React.createElement(Tag, {
                key: uuidv4(),
                ...el.props
              })
            )) : null
          }
        </TagsWrapper>
        <Heading>{props.mainSectionHeader}</Heading>
        <SectionsWrapper>
          <Section type={SECTION_TYPES.primary} wide={!props.secondarySection}>
            <Section
              type={SECTION_TYPES.name}
              wide={props.japaneseForm?.kanji.length > 5 || props.wide}
            >
              {
                props.name && !props.wide ? (
                  <NameWrapper>
                    <CharacterBlock small={props.japaneseForm?.kanji.length > 5}>
                      {
                        props.japaneseForm?.kanji ? (
                          <KanjiWithFurigana
                            mainCharacters
                            kanji={props.japaneseForm?.kanji}
                            furigana={props.japaneseForm?.furigana}
                            small={props.japaneseForm?.kanji.length > 5}
                          />
                        ) : props.name
                      }
                    </CharacterBlock>
                    {
                      props.additionalBox ? (
                        props.additionalBox
                      ) : null
                    }
                  </NameWrapper>
                ) : null
              }
              {
                props.mainSection ? (
                  <MainSection wide={props.japaneseForm?.kanji.length > 5 || props.wide}>
                    {props.mainSection}
                  </MainSection>
                ) : null
              }
            </Section>
            {
              props.sections ? props.sections.map((section) => (
                section?.section ? (
                  <Section key={uuidv4()}>
                    {
                      section.title ? (
                        <Heading>{section.title}</Heading>
                      ) : null
                    }
                    {section?.section}
                  </Section>
                ) : null
              )) : null
            }
          </Section>
          {
            props.secondarySection ? (
              <Section type={SECTION_TYPES.secondary}>
                {props.secondarySection}
              </Section>
            ) : null
          }
        </SectionsWrapper>
        {props.children}
      </Content>
    </DetailsWrapper>
  );
};

Details.propTypes = {
  mainSection: PropTypes.node.isRequired,
  mainSectionHeader: PropTypes.string.isRequired,
  additionalBox: PropTypes.node,
  apiError: PropTypes.bool,
  children: PropTypes.node,
  inProgress: PropTypes.bool,
  japaneseForm: japaneseFormShape,
  jishoLink: PropTypes.string,
  known: PropTypes.bool,
  meaning: PropTypes.string,
  name: PropTypes.string,
  nowLearning: PropTypes.bool,
  secondarySection: PropTypes.node,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    section: PropTypes.node
  })),
  tags: PropTypes.arrayOf(PropTypes.node),
  toRepeat: PropTypes.bool,
  wide: PropTypes.bool
};

Details.defaultProps = {
  additionalBox: null,
  apiError: false,
  children: null,
  inProgress: null,
  japaneseForm: null,
  jishoLink: null,
  known: null,
  name: null,
  meaning: null,
  nowLearning: null,
  secondarySection: null,
  sections: null,
  tags: null,
  toRepeat: null,
  wide: false
};

export default Details;
