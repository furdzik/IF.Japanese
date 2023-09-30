import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

import Collapsible from 'react-collapsible';

import { GRAMMAR_TYPES } from '@constants';

import { vocabItemShape } from '@types/vocab';

import conjugationMessages from '@lang/messages/conjugation.messages';

import VerbConjugationGroup from '@components/VerbConjugationGroup';

import {
  Item,
  TileStyled,
  MainBox,
  VocabLink,
  BoxContent,
  BoxWrapper,
  TriggerWrapper,
  StyledVerbType,
  ParticleWrapper,
  ParticleList,
  ParticleListItem,
  ParticleLabel
} from './VerbsListItem.styles.js';
import messages from './VerbsListItem.messages';

const VerbsListItem = (props) => {
  const intl = useIntl();

  const [collapsed, setCollapse] = useState(false);

  const renderTrigger = () => (
    <TriggerWrapper isCollaps={collapsed}>
      {
        !collapsed ? (
          <Icon
            path={mdiChevronDown}
            size="2.3rem"
          />
        ) : (
          <Icon
            path={mdiChevronUp}
            size="2.3rem"
          />
        )
      }
    </TriggerWrapper>
  );

  return (
    <Item
      key={props.item.vocab}
      inProgress={props.item.inProgress}
      known={props.item.known}
      level={props.item.level}
      id={props.item.vocab}
    >
      <MainBox>
        <TileStyled
          key={props.item.vocab}
          inProgress={props.item.inProgress}
          nowLearning={props.item.nowLearning}
          known={props.item.known}
          level={props.item.level}
        >
          <VocabLink to={`/vocab/${props.item.vocab}`}>{props.item.vocab}</VocabLink>
        </TileStyled>
        <StyledVerbType verbType={props.item.verb?.verbType} />
        {
          props.item.verb && props.item.verb.particles ? (
            <ParticleWrapper>
              <ParticleLabel>
                {intl.formatMessage(messages.particleLabel)}
              </ParticleLabel>
              <ParticleList>
                {
                  props.item.verb.particles.map((el) => (
                    <ParticleListItem key={uuidv4()}>{el}</ParticleListItem>
                  ))
                }
              </ParticleList>
            </ParticleWrapper>
          ) : null
        }
      </MainBox>
      <BoxContent smallerMargin={!collapsed}>
        <BoxWrapper>
          <VerbConjugationGroup
            showLabel={collapsed}
            label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.jishouForm}Label`])}
            verb={props.item.verb}
            grammar={[GRAMMAR_TYPES.jishouForm]}
            politeForm
          />

          <Collapsible
            trigger={renderTrigger(collapsed)}
            transitionTime={50}
            open={collapsed}
            handleTriggerClick={() => setCollapse(!collapsed)}
          >
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.kanouForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.kanouForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.taiForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.taiForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.teForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.teForm]}
              noPast
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.ikouForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.ikouForm]}
              noPast
              noNegative
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.meireiForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.meireiForm]}
              noPast
            />

            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.joukenBaForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.joukenBaForm]}
              noPast
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.joukenTaraForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.joukenTaraForm]}
              noPast
            />

            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.ukemiForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.ukemiForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.shiekiForm}Label`])}
              verb={props.item.verb}
              grammar={[GRAMMAR_TYPES.shiekiForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.shiekiukemiForm}Label`])}
              verb={props.item.verb}
              grammar={[
                GRAMMAR_TYPES.shiekiukemiForm,
                GRAMMAR_TYPES.shiekiukemiShortForm
              ]}
              politeForm
            />
          </Collapsible>
        </BoxWrapper>
      </BoxContent>
    </Item>
  );
};

VerbsListItem.propTypes = {
  item: vocabItemShape.isRequired
};

export default VerbsListItem;
