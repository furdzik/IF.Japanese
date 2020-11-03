import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import Collapsible from 'react-collapsible';

import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

import { bunpouTypes, verbType } from '@config/constants';

import { vocabShape } from '@components/VocabularyList/VocabularyList.types';

import VerbConjugationGroup from '@components/VerbConjugationGroup';

import {
  Item,
  VerbBox,
  MainBox,
  BoxContent,
  BoxWrapper,
  MeaningBox,
  Meaning,
  TriggerWrapper,
  ShowMeaning,
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
  const [showMeaning, setShowMeaning] = useState(!props.item.known);

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
    <TriggerWrapper>
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
      known={props.item.known}
      inProgress={props.item.inProgress}
      level={props.item.level}
    >
      <MainBox>
        <VerbBox
          key={props.item.vocab}
          known={props.item.known}
          inProgress={props.item.inProgress}
          level={props.item.level}
        >
          {props.item.vocab}
        </VerbBox>
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
            label={intl.formatMessage(messages[`${bunpouTypes.JISHOU_KEI}Label`])}
            verb={props.item.verb}
            bunpou={[bunpouTypes.JISHOU_KEI]}
            teineiKei
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
              label={intl.formatMessage(messages[`${bunpouTypes.KANOU_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.KANOU_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(messages[`${bunpouTypes.TAI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.TAI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(messages[`${bunpouTypes.TE_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.TE_KEI]}
              noPast
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(messages[`${bunpouTypes.IKOU_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.IKOU_KEI]}
              noPast
              noNegative
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(messages[`${bunpouTypes.IKOU_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.MEIREI_KEI]}
              noPast
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(messages[`${bunpouTypes.UKEMI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.UKEMI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(messages[`${bunpouTypes.SHIEKI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.SHIEKI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(messages[`${bunpouTypes.SHIEKIUKEMI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.SHIEKIUKEMI_KEI, bunpouTypes.SHIEKIUKEMI_SHORT_KEI]}
              teineiKei
            />
          </Collapsible>
        </BoxWrapper>

        <MeaningBox>
          {
            showMeaning ? (
              <React.Fragment>
                <Meaning>The meaning of the word will be here</Meaning>
                <ShowMeaning withMargin onClick={() => setShowMeaning(!showMeaning)}>
                  {intl.formatMessage(messages.hideMeaning)}
                </ShowMeaning>
              </React.Fragment>
            ) : (
              <ShowMeaning onClick={() => setShowMeaning(!showMeaning)}>
                {intl.formatMessage(messages.showMeaning)}
              </ShowMeaning>
            )
          }
        </MeaningBox>
      </BoxContent>
    </Item>
  );
};

VerbsListItem.propTypes = {
  item: vocabShape.isRequired
};

export default VerbsListItem;
