import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

import Collapsible from 'react-collapsible';

import { grammarTypes, verbType } from '@constants';

import { vocabItemShape } from '@types/vocab';

import conjugationMessages from '@lang/defaultMessages/conjugation.messages';

import VerbConjugationGroup from '@components/VerbConjugationGroup';

import {
  Item,
  TileStyled,
  MainBox,
  VocabLink,
  BoxContent,
  BoxWrapper,
  TriggerWrapper,
  VerbType,
  ParticleWrapper,
  ParticleList,
  ParticleListItem,
  ParticleLabel
} from './VerbsListItem.styles.js';
import messages from './VerbsListItem.messages';

const VerbsListItem = (props) => {
  const intl = useIntl();

  const [collapsed, setCollapse] = useState(false);

  const verbTypeLabel = (type, symbol = false) => {
    switch (type) {
      case verbType.TRANSITIVE: {
        return symbol
          ? intl.formatMessage(messages.verbTypeTransitive)
          : intl.formatMessage(messages.verbTypeTransitiveText);
      }
      case verbType.INTRANSITIVE: {
        return symbol
          ? intl.formatMessage(messages.verbTypeIntransitive)
          : intl.formatMessage(messages.verbTypeIntransitiveText);
      }
      case verbType.OTHER: {
        return symbol
          ? intl.formatMessage(messages.verbTypeOther)
          : intl.formatMessage(messages.verbTypeOtherText);
      }

      default:
        return null;
    }
  };

  const renderTrigger = () => (
    <TriggerWrapper isCollaps={collapsed}>
      {
        !collapsed ? (
          <React.Fragment>
            <Icon
              path={mdiChevronDown}
              size="2.3rem"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Icon
              path={mdiChevronUp}
              size="2.3rem"
            />
          </React.Fragment>
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
        <VerbType title={verbTypeLabel(props.item.verb?.verbType)}>
          {verbTypeLabel(props.item.verb?.verbType, true)}
        </VerbType>
        {
          props.item.verb && props.item.verb.particles ? (
            <ParticleWrapper>
              <ParticleLabel>
                {intl.formatMessage(messages.particleLabel)}
              </ParticleLabel>
              <ParticleList>
                {
                  props.item.verb.particles.map((el, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ParticleListItem key={index}>{el}</ParticleListItem>
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
            label={intl.formatMessage(conjugationMessages[`${grammarTypes.JISHOU_FORM}Label`])}
            verb={props.item.verb}
            grammar={[grammarTypes.JISHOU_FORM]}
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
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.KANOU_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.KANOU_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.TAI_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.TAI_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.TE_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.TE_FORM]}
              noPast
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.IKOU_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.IKOU_FORM]}
              noPast
              noNegative
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.MEIREI_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.MEIREI_FORM]}
              noPast
            />

            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.JOUKEN_BA_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.JOUKEN_BA_FORM]}
              noPast
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.JOUKEN_TARA_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.JOUKEN_TARA_FORM]}
              noPast
            />

            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.UKEMI_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.UKEMI_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.SHIEKI_FORM}Label`])}
              verb={props.item.verb}
              grammar={[grammarTypes.SHIEKI_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.SHIEKIUKEMI_FORM}Label`])}
              verb={props.item.verb}
              grammar={[
                grammarTypes.SHIEKIUKEMI_FORM,
                grammarTypes.SHIEKIUKEMI_SHORT_FORM
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
