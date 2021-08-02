import React from 'react';
import PropTypes from 'prop-types';
// import { useIntl } from 'react-intl';

// import { Link } from 'react-router-dom';

// import { grammarTypes, tagTypes } from '@config/constants';

import { statusShape, tagsShape } from '@types/commonDetailsShape';
// import {
//   japaneseFormShape,
//   translationsShape,
//   kanjiPartsShape,
//   otherFormsShape
// } from '@types/vocabularyDetailsShape';

import Details from '@components/Details';
// import DetailsSecondarySection from '@components/DetailsSecondarySection';
// import DetailsSubHeader from '@components/DetailsSubHeader';
import Tag from '@components/Tag';

import {

} from './GrammarDetails.styles.js';
// import messages from './GrammarDetails.messages';

const GrammarDetails = (props) => {
  // const intl = useIntl();

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
      // japaneseForm={props.japaneseForm}
      // jishoLink={`https://jisho.org/word/${props.metadata.slug}`}
      tags={getTags()}
      // additionalBox={(
      //   props.antonyms.length > 0 ? (
      //     <AntonymsBox key={props.antonyms}>
      //       {intl.formatMessage(messages.antonymText)}
      //       {
      //         props.antonyms.map((antonym) => (
      //           <AntonymsLink key={antonym} to={`/vocab/${antonym}`}>
      //             {antonym}
      //           </AntonymsLink>
      //         ))
      //       }
      //     </AntonymsBox>
      //   ) : null
      // )}
      // mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      // mainSection={(
      //   <TranslationsList>
      //     {
      //       props.translations && props.translations.map((el, index) => (
      //         // eslint-disable-next-line react/no-array-index-key
      //         <TranslationsListItem number={index + 1} key={index}>
      //           <div>
      //             <PartOfSpeechWrapper>
      //               {
      //                 el.partsOfSpeech.map((s, key) => (
      //                   // eslint-disable-next-line react/no-array-index-key
      //                   <PartOfSpeechBox key={key}>{s}</PartOfSpeechBox>
      //                 ))
      //               }
      //             </PartOfSpeechWrapper>
      //             <div>
      //               {
      //                 // eslint-disable-next-line no-shadow
      //                 el.englishDefinitions.map((def, index) => (
      //                   // eslint-disable-next-line react/no-array-index-key
      //                   <React.Fragment key={index}>
      //                     {def}
      //                     {el.englishDefinitions.length !== index + 1 ? ', ' : ''}
      //                   </React.Fragment>
      //                 ))
      //               }
      //               {
      //                 el.restrictions.length ? (
      //                   <AdditionalInfo>
      //                     {intl.formatMessage(messages.restrictionsText)} {el.restrictions.join(', ')}
      //                   </AdditionalInfo>
      //                 ) : null
      //               }
      //               <AdditionalInfo>{el.info}</AdditionalInfo>
      //               <AdditionalInfo>{el.tags.join(', ')}</AdditionalInfo>
      //               {
      //                 el.seeAlso ? (
      //                   el.seeAlso.map((seeAlsoEl, seeAlsoIndex) => (
      //                     // eslint-disable-next-line react/no-array-index-key
      //                     <AdditionalInfo key={seeAlsoIndex}>
      //                       {intl.formatMessage(messages.SeeAlsoText)}
      //                       <Link to={`vocab/${seeAlsoEl}`}>{seeAlsoEl}</Link>
      //                     </AdditionalInfo>
      //                   ))
      //                 ) : null
      //               }
      //               {
      //                 el.source ? (
      //                   el.source.map((sourceEl, sourceIndex) => (
      //                     // eslint-disable-next-line react/no-array-index-key
      //                     <AdditionalInfo key={sourceIndex}>
      //                       {intl.formatMessage(messages.sourceText, {
      //                         language: sourceEl.language,
      //                         word: sourceEl.word
      //                       })}
      //                     </AdditionalInfo>
      //                   ))
      //                 ) : null
      //               }
      //             </div>
      //           </div>
      //         </TranslationsListItem>
      //       ))
      //     }
      //     {
      //       props.otherForms.length ? (
      //         <OtherFormsWrapper>
      //           <DetailsSubHeader>
      //             {intl.formatMessage(messages.otherFormsHeader)}
      //           </DetailsSubHeader>
      //           {
      //             props.otherForms.map((form, index) => (
      //               <div key={`${form.word}_${form.reading}`}>
      //                 {form.word} 【{form.reading}】
      //                 {props.otherForms.length - 1 !== index ? '、' : null}
      //               </div>
      //             ))
      //           }
      //         </OtherFormsWrapper>
      //       ) : null
      //     }
      //   </TranslationsList>
      // )}
      // secondarySection={props.kanjiParts ? (
      //   <DetailsSecondarySection>
      //     <DetailsSubHeader>
      //       {intl.formatMessage(messages.kanjiPartsHeader)}
      //     </DetailsSubHeader>
      //     {
      //       props.kanjiParts.map((kanji, kanjiIndex) => (
      //         // eslint-disable-next-line react/no-array-index-key
      //         <KanjiPartsWrapper key={kanjiIndex}>
      //           {
      //             kanji.tags ? (
      //               <KanjiTags>
      //                 {
      //                   kanji.tags.map((tag, tagIndex) => (
      //                     <Tag
      //                       small
      //                       tagType={tag.tagType}
      //                       // eslint-disable-next-line react/no-array-index-key
      //                       key={tagIndex}
      //                     >
      //                       {tag.label}
      //                     </Tag>
      //                   ))
      //                 }
      //               </KanjiTags>
      //             ) : null
      //           }
      //           <KanjiWrapper>
      //             <div>
      //               <StyledTile
      //                 level={0}
      //                 known={kanji.status?.known}
      //                 nowLearning={kanji.status?.nowLearning}
      //                 inProgress={kanji.status?.inProgress}
      //                 noOrder
      //               >
      //                 <Link to={`/kanji/${kanji.kanji}`}>
      //                   {kanji.kanji}
      //                 </Link>
      //               </StyledTile>
      //             </div>
      //             <KanjiMeaningWrapper>
      //               <KanjiMeaning>{kanji.meaning}</KanjiMeaning>
      //               <KanjiReading>
      //                 <div>Kun: {kanji.reading?.kunyomi.join(', ')}</div>
      //                 <div>On: {kanji.reading?.onyomi.join(', ')}</div>
      //               </KanjiReading>
      //             </KanjiMeaningWrapper>
      //           </KanjiWrapper>
      //         </KanjiPartsWrapper>
      //       ))
      //     }
      //   </DetailsSecondarySection>
      // ) : null}
      // sections={[
      //   {
      //     title: intl.formatMessage(messages.additionalExplanationHeader),
      //     section: props.additionalExplanation ? (
      //       <AdditionalExplanationWrapper>
      //         {props.additionalExplanation}
      //       </AdditionalExplanationWrapper>
      //     ) : null
      //   },
      //   {
      //     title: intl.formatMessage(messages.examplesHeader),
      //     section: props.examples ? (
      //       <AdditionalExplanationWrapper>
      //         {
      //           props.examples.map((el, index) => (
      //             // eslint-disable-next-line react/no-array-index-key
      //             <div key={index}>{el}</div>
      //           ))
      //         }
      //       </AdditionalExplanationWrapper>
      //     ) : null
      //   }
      // ]}
    />
  );
};

GrammarDetails.propTypes = {
  grammarId: PropTypes.string.isRequired,
  grammarName: PropTypes.string.isRequired,
  status: statusShape.isRequired,
  tags: tagsShape
};

GrammarDetails.defaultProps = {
  tags: []
};

export default GrammarDetails;
