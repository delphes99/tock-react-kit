import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from './Card';

const onButtonClick = action('buttonClick');

storiesOf('Card', module)
  .add('Default', () => (
    <Card
      title="Card title"
      subTitle="Card subtitle"
      imageUrl="https://avatars0.githubusercontent.com/u/48585267?s=200&v=4"
      onButtonClick={onButtonClick}
    />
  ))
  .add('Without subtitle', () => (
    <Card
      title="Card title"
      imageUrl="https://avatars0.githubusercontent.com/u/48585267?s=200&v=4"
      onButtonClick={onButtonClick}
    />
  ))
  .add('With buttons', () => (
    <Card
      title="Card title"
      subTitle="Card subtitle"
      imageUrl="https://avatars0.githubusercontent.com/u/48585267?s=200&v=4"
      onButtonClick={onButtonClick}
      buttons={[
        {
          label: 'Website',
          url: 'https://doc.tock.ai',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/theopenconversationkit',
        },
      ]}
    />
  ));
