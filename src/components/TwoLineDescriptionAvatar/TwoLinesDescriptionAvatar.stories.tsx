import React from 'react';
import { Story } from '@storybook/react';
import TwoLineDescriptionAvatar from '.';
import GuardianIcon from '../../assets/icons/icon.png';

export default {
  title: 'Components/ComposedAvatars',
};

const Template: Story<any> = (args) => <TwoLineDescriptionAvatar {...args} />;

export const TwoLineAvatar = Template.bind({});

TwoLineAvatar.args = {
  src: '',
  icon: GuardianIcon,
  primaryText: 'Hello',
  secondaryText: 'World',
};
