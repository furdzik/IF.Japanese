import React from 'react';
import PropTypes from 'prop-types';

import { inflectionTypes } from '@constants';

import { verbItemShape } from '@types/verb';

import { shouldDisplayShortForm } from './utils';

import {
  Box,
  BoxGroup,
  VerbConjugationWrapper,
  Label
} from './VerbConjugationGroup.styles.js';

const VerbConjugationGroup = (props) => props.verb ? (
  <BoxGroup showLine={props.showLine}>
    {
      props.label && props.showLabel ? (
        <Label>{props.label}</Label>
      ) : null
    }
    {
      props.grammar
        .map((item, index) => shouldDisplayShortForm(item, props.verb.verbGroup) ? (
        // eslint-disable-next-line react/no-array-index-key
          <Box key={index}>
            <VerbConjugationWrapper
              verb={props.verb}
              grammar={item}
              inflection={inflectionTypes.NORMAL}
            />
            {
              !props.noNegative ? (
                <VerbConjugationWrapper
                  verb={props.verb}
                  grammar={item}
                  inflection={inflectionTypes.NEGATIVE}
                />
              ) : null
            }
            {
              !props.noPast ? (
                <React.Fragment>
                  <VerbConjugationWrapper
                    verb={props.verb}
                    grammar={item}
                    inflection={inflectionTypes.PAST}
                  />
                  <VerbConjugationWrapper
                    verb={props.verb}
                    grammar={item}
                    inflection={inflectionTypes.PAST_NEGATIVE}
                  />
                </React.Fragment>
              ) : null
            }
          </Box>
        ) : null)
    }
    {
      props.grammar
        .map((item, index) => props.politeForm && shouldDisplayShortForm(
          item, props.verb.verbGroup
        ) ? (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index}>
            <VerbConjugationWrapper
              verb={props.verb}
              grammar={item}
              inflection={inflectionTypes.NORMAL}
              politeForm
            />
            {
              !props.noNegative ? (
                <VerbConjugationWrapper
                  verb={props.verb}
                  grammar={item}
                  inflection={inflectionTypes.NEGATIVE}
                  politeForm
                />
              ) : null
            }
            {
              !props.noPast ? (
                <React.Fragment>
                  <VerbConjugationWrapper
                    verb={props.verb}
                    grammar={item}
                    inflection={inflectionTypes.PAST}
                    politeForm
                  />
                  <VerbConjugationWrapper
                    verb={props.verb}
                    grammar={item}
                    inflection={inflectionTypes.PAST_NEGATIVE}
                    politeForm
                  />
                </React.Fragment>
              ) : null
            }
          </Box>
          ) : null)
    }
  </BoxGroup>
) : null;

VerbConjugationGroup.propTypes = {
  grammar: PropTypes.arrayOf(PropTypes.string).isRequired,
  verb: verbItemShape.isRequired,
  label: PropTypes.string,
  noNegative: PropTypes.bool,
  noPast: PropTypes.bool,
  politeForm: PropTypes.bool,
  showLabel: PropTypes.bool,
  showLine: PropTypes.bool
};

VerbConjugationGroup.defaultProps = {
  label: '',
  noNegative: false,
  noPast: false,
  politeForm: false,
  showLabel: false,
  showLine: false
};

export default VerbConjugationGroup;
