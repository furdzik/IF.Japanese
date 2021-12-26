import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { INFLECTION_TYPES } from '@constants';

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
        .map((item) => shouldDisplayShortForm(item, props.verb.verbGroup) ? (
          <Box key={uuidv4()}>
            <VerbConjugationWrapper
              verb={props.verb}
              grammar={item}
              inflection={INFLECTION_TYPES.normal}
            />
            {
              !props.noNegative ? (
                <VerbConjugationWrapper
                  verb={props.verb}
                  grammar={item}
                  inflection={INFLECTION_TYPES.negative}
                />
              ) : null
            }
            {
              !props.noPast ? (
                <React.Fragment>
                  <VerbConjugationWrapper
                    verb={props.verb}
                    grammar={item}
                    inflection={INFLECTION_TYPES.past}
                  />
                  <VerbConjugationWrapper
                    verb={props.verb}
                    grammar={item}
                    inflection={INFLECTION_TYPES.pastNegative}
                  />
                </React.Fragment>
              ) : null
            }
          </Box>
        ) : null)
    }
    {
      props.grammar
        .map((item) => props.politeForm && shouldDisplayShortForm(
          item, props.verb.verbGroup
        ) ? (
          <Box key={uuidv4()}>
            <VerbConjugationWrapper
              verb={props.verb}
              grammar={item}
              inflection={INFLECTION_TYPES.normal}
              politeForm
            />
            {
              !props.noNegative ? (
                <VerbConjugationWrapper
                  verb={props.verb}
                  grammar={item}
                  inflection={INFLECTION_TYPES.negative}
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
                    inflection={INFLECTION_TYPES.past}
                    politeForm
                  />
                  <VerbConjugationWrapper
                    verb={props.verb}
                    grammar={item}
                    inflection={INFLECTION_TYPES.pastNegative}
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
